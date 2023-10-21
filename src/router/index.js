import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioSlider from "../views/PortfolioSlider.vue"
import Design from "../views/Design.vue"
import Item2_IM from "../views/Item2_IM.vue"
import Item2_EJ from "../views/Item2_EJ.vue"
import Item2_JM from "../views/Item2_JM.vue"
import Slider_BM from "../views/Slider_BM.vue"

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
    path: '/Item2_EJ',
    component: Item2_EJ
  },
  {
    path: '/Item2_JM',
    component: Item2_JM
  },
  {
    path: '/Slider_BM',
    component: Slider_BM
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
