import { createApp } from 'vue'
import App from './App.vue'
import router from '/src/router'
import pluginApi from './api/utils/index'

createApp(App)
  .use(pluginApi)
  .use(router)
  .mount('#app')
