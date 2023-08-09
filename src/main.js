import { createApp } from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import createRouter from './router'

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)

app.use(createRouter())
app.use(vuetify)
app.use(VueCookies, { expires: '7d', path: '/'})
app.mount('#app')

