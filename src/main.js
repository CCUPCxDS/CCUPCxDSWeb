import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/index', component: () => import('./components/views/main.vue')
        },
        {
            path: '/Question', component: () => import('./components/views/question.vue')
        },
        {
            path: '/', redirect: '/index'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
