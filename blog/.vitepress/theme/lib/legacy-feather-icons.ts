import { defineComponent, h } from 'vue'

function resolveSize(size: number | string): string {
  if (size === '1x') {
    return '1em'
  }

  return typeof size === 'number' ? `${size}px` : size
}

export const StarIcon = defineComponent({
  name: 'StarIcon',
  inheritAttrs: false,
  props: {
    size: {
      type: [Number, String],
      default: '1em',
    },
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        ...attrs,
        'aria-hidden': 'true',
        fill: 'currentColor',
        height: resolveSize(props.size),
        viewBox: '0 0 24 24',
        width: resolveSize(props.size),
        xmlns: 'http://www.w3.org/2000/svg',
      },
      [
        h('path', {
          d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
        }),
      ],
    )
  },
})