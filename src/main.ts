import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createI18n } from 'vue-i18n'
import enLanguage from './locales/en-GB.json'
import nlLanguage from './locales/nl-NL.json'

library.add({
    faPen,
    faTimes,
    faChevronDown
})

const messages = {
    en: enLanguage,
    nl: nlLanguage
}

const i18n = createI18n({
    legacy: false,
    locale: 'nl',
    fallbackLocale: 'en',
    messages,
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
