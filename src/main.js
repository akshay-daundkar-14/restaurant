import { createApp } from 'vue'
import App from './App.vue'

import  routers from "./routes";

createApp(App).use(routers).mount('#app')
