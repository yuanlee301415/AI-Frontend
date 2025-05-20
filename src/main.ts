import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from '@/store'
import 'virtual:uno.css'
/*
* 样式重置
* Tailwind compat
* 这个样式表基于 Tailwind reset，只是去除了按钮的背景颜色覆盖，以避免与 UI 框架发生冲突。
* @see https://unocss.net/guide/style-reset#tailwind-compat
* */
import '@unocss/reset/tailwind-compat.css'
import './assets/main.css'

function bootstrap() {
  const app = createApp(App)

  setupRouter(app)
  setupStore(app)
  app.mount('#app')
}

bootstrap()
