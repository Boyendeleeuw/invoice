import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router/router'
import VueCompositionApi from '@vue/composition-api'

const app = createApp(App)

app.use(VueCompositionApi)
app.use(router)

app.mount('#app')
