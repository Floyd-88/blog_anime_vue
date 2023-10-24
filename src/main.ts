/* eslint-disable vue/multi-word-component-names */
import './styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Paginate from 'vuejs-paginate-next'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Paginate', Paginate)
app.use(ElementPlus)

app.mount('#app')
