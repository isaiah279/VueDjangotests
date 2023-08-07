import { createApp } from 'vue'
import App from './App.vue'

// importing router into main js file
import router from './router'

import './assets/main.css'
import '../index.css'
import axios from 'axios'
const app = createApp(App)
              app.config.globalProperties.$http=axios
              app.use(router)
              app.mount('#app')

              // createApp(App).use(router).mount('#app')
