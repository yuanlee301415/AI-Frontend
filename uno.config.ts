import { defineConfig, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    /*
    * UnoCSS 的默认预设。目前它等同于 @unocss/preset-wind
    * 用于 UnoCSS 的 TailWind/Windi CSS 预设
    * @see https://unocss.net/presets/wind
    * */
    presetUno(),

    /*
    * 图标预设
    * 在 UnoCSS 中使用纯 CSS 图标
    * @see https://unocss.net/presets/icons#图标预设
    * */
    presetIcons()
  ],

  rules: [
    /*
    * 动态规则
    * @see https://unocss.net/config/rules#动态规则
    * */
    [/^width-(\d+)$/, ([, d]) => ({ width: `${d}px` })],
    [/^height-(\d+)$/, ([, d]) => ({ height: `${d}px` })]
  ],

  /*
  * 快捷方式
  * @see https://unocss.net/config/shortcuts#快捷方式
  * */
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center'
    }
  ],

  /*
  * 主题
  * @see https://unocss.net/config/theme
  * */
  theme: {
    colors: {
      'veryCool': '#0000ff', // class="text-very-cool"
      'brand': {
        'primary': 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
      }
    }
  }
})
