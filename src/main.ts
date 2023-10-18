/* eslint-disable vue/multi-word-component-names */
import './styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Paginate from 'vuejs-paginate-next'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Paginate', Paginate)

app.mount('#app')
