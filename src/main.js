import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import common from "./components/common"
const app = createApp(App)
app.use(router).use(store).use(common).mount('#app')