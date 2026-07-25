import { computed, shallowRef, watch } from 'vue'
import { useData } from 'vitepress'

const API_ORIGIN = 'https://mechakucha-api.vercel.app'

function createViewCountKey(relativePath: string): string {
  let hash = 5381

  for (const character of relativePath) {
    hash = ((hash << 5) + hash) ^ character.charCodeAt(0)
  }

  const slug = relativePath
    .replace(/\.md$/, '')
    .split('/')
    .filter(Boolean)
    .pop()
    ?.replace(/[^a-z0-9-]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase() || 'post'

  return `vp-${slug}-${(hash >>> 0).toString(16)}`
}

interface ViewCountResponse {
  success?: boolean
  item?: {
    viewCount?: number
  }
}

export function useViewCount() {
  const { page } = useData()
  const viewCount = shallowRef<number | null>(null)
  let currentRequestId = 0

  const pageKey = computed(() => createViewCountKey(page.value.relativePath))
  const storageKey = computed(() => `blog:view-count:${pageKey.value}`)
  const apiUrl = computed(() => `${API_ORIGIN}/blog/post/${pageKey.value}/view-count`)

  async function requestViewCount(method: 'GET' | 'POST', requestId: number): Promise<void> {
    try {
      const response = await fetch(apiUrl.value, {
        method,
      })

      if (!response.ok) {
        return
      }

      const payload = await response.json() as ViewCountResponse

      if (requestId !== currentRequestId || !payload.success) {
        return
      }

      const nextViewCount = payload.item?.viewCount
      viewCount.value = typeof nextViewCount === 'number' ? nextViewCount : null
    } catch {
      viewCount.value = null
    }
  }

  async function syncViewCount(): Promise<void> {
    if (typeof window === 'undefined') {
      return
    }

    currentRequestId += 1
    const requestId = currentRequestId
    viewCount.value = null

    if (window.localStorage.getItem(storageKey.value)) {
      await requestViewCount('GET', requestId)
      return
    }

    await requestViewCount('POST', requestId)

    if (requestId === currentRequestId && viewCount.value !== null) {
      window.localStorage.setItem(storageKey.value, new Date().toISOString())
    }
  }

  watch(
    () => page.value.relativePath,
    () => {
      void syncViewCount()
    },
    { immediate: true },
  )

  return {
    viewCount,
  }
}