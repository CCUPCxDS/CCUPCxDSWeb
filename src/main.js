import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import { createRouter, createWebHistory } from 'vue-router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import the fontawesome icons you want to use */  
import { faFacebook, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faInstagram, faDiscord)

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
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
