import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3({
      dark: 'class',
    }),
  ],
  theme: {
    colors: {
      vue: '#3eaf7c',
    },
  },
})