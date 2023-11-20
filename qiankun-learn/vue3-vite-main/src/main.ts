import { registerMicroApps, start } from 'qiankun'

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

registerMicroApps([
  {
    name: 'vue-vite3-sub',
    entry: 'http://localhost:5174',
    container: '#vue3ViteSub',
    activeRule: '/vue3ViteSub'
  }
])
start({ prefetch: true, sandbox: true })
const app = createApp(App)

app.use(router)

app.mount('#app')
