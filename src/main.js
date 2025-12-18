import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
import store from './stores'

import FontAwesomeIcon from './plugins/fontawesome'

const app = createApp(App)


app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')