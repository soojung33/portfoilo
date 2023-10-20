import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioSlider from "../views/PortfolioSlider.vue"
import Design from "../views/Design.vue"
import Item2_IM from "../views/Item2_IM.vue"
import portfolio1 from "../views/portfolio1.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/PortfolioSlider',
    component: PortfolioSlider
  },
  {
    path: '/Design',
    component: Design
  },
  {
    path: '/Item2_IM',
    component: Item2_IM
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
