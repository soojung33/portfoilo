import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import portfolio1 from "../views/portfolio1.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio1',
    component: portfolio1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
