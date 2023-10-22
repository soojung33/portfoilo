import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Vue Router를 불러옵니다.
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@fortawesome/fontawesome-free/js/all.js'
import Header from '@/components/Header.vue'

loadFonts()


const app = createApp(App)
app.component('Header', Header)
app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')

  
