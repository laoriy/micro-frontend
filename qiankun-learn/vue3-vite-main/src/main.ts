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
  },
  {
    name: 'vue-webpack-sub',
    entry: 'http://localhost:8080',
    container: '#vueWebpackSub',
    activeRule: '/vueWebpackSub'
  },{
    name: 'react-sub',
    entry: 'http://localhost:3000',
    container: '#reactSub',
    activeRule: '/reactSub'
  }
])
start({ prefetch: true, sandbox: true })
const app = createApp(App)

app.use(router)

app.mount('#app')
