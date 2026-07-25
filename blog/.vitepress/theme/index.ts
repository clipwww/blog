import { withBase, useData } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import BlogHome from './components/BlogHome.vue'
import Comment from './components/Comment.vue'
import CompatCodeBlock from './components/CompatCodeBlock.vue'
import CompatCodeGroup from './components/CompatCodeGroup.vue'
import CodePenEmbed from './components/CodePenEmbed.vue'
import MyLayout from './components/MyLayout.vue'
import NavLink from './components/NavLink.vue'
import OutboundLink from './components/OutboundLink.vue'
import TagArchive from './components/TagArchive.vue'
import TagOverview from './components/TagOverview.vue'
import UmamusumeIndex from './components/UmamusumeIndex.vue'
import StickyDemo from './components/StickyDemo.vue'
import UmamusumeRaceResult from './components/UmamusumeRaceResult.vue'

import 'virtual:uno.css'
import './style.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('BlogHome', BlogHome)
    app.component('Comment', Comment)
    app.component('CodePenEmbed', CodePenEmbed)
    app.component('CodeBlock', CompatCodeBlock)
    app.component('CodeGroup', CompatCodeGroup)
    app.component('NavLink', NavLink)
    app.component('OutboundLink', OutboundLink)
    app.component('TagArchive', TagArchive)
    app.component('TagOverview', TagOverview)
    app.component('UmamusumeIndex', UmamusumeIndex)
    app.component('StickyDemo', StickyDemo)
    app.component('UmamusumeRaceResult', UmamusumeRaceResult)
    app.component('code-block', CompatCodeBlock)
    app.component('code-group', CompatCodeGroup)

    app.config.globalProperties.$withBase = withBase

    app.mixin({
      setup() {
        const { frontmatter, page, site, theme: themeData } = useData()

        return {
          $frontmatter: frontmatter,
          $frontmatterKey: '',
          $page: page,
          $service: '',
          $site: site,
          $themeConfig: themeData,
        }
      },
    })
  },
}

export default theme