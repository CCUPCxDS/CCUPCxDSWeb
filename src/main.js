import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/', component: import('./components/views/main.vue')
        },
        {
            path: '/Question', component: import('./components/views/question.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
