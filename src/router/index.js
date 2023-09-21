import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import portfoilo1 from "../views/portfoilo1.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfoilo1',
    component: portfoilo1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
