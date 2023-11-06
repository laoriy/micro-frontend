import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let app: any
function render(container: string = '#app') {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.mount(container)
  }
}
const initQianKun = () => {
  // some code
  renderWithQiankun({
    mount(props) {
      console.log('mount', props)
      render(props.container as any)
    },
    bootstrap() {
      console.log('bootstrap')
    },
    unmount(props: any) {
      app.unmount()
      app = null
      console.log('unmount', props)
    },
    update(props: any) {
      console.log('update')
    }
  })
}
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
