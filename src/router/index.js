import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import NotFound from '../views/NotFound.vue'
import ColoursPage from '../views/ColoursPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/ColoursPage',
            name: 'colour',
            component: ColoursPage
        }
    ]
})
export default router