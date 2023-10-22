import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioSlider from "../views/PortfolioSlider.vue"
import Design from "../views/Design.vue"
import Item1_Img1 from "../views/Item1_Img1.vue"
import Item1_Img2 from "../views/Item1_Img2.vue"
import Item1_Img3 from "../views/Item1_Img3.vue"
import Item1_Img4 from "../views/Item1_Img4.vue"
import Item1_Img5 from "../views/Item1_Img5.vue"
import Item1_Img6 from "../views/Item1_Img6.vue"
import Item1_Img7 from "../views/Item1_Img7.vue"
import Item1_Img8 from "../views/Item1_Img8.vue"
import Item1_Img9 from "../views/Item1_Img9.vue"
import Item2_IM from "../views/Item2_IM.vue"
import Item2_EJ from "../views/Item2_EJ.vue"
import Item2_JM from "../views/Item2_JM.vue"
import Slider_BM from "../views/Slider_BM.vue"
import Slider_BH from "../views/Slider_BH.vue"
import Slider_RIP from "../views/Slider_RIP.vue"
import Slider_KE from "../views/Slider_KE.vue"
import Slider_BB from "../views/Slider_BB.vue"

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
    path: '/Item1_Img1',
    component: Item1_Img1
  },
  {
    path: '/Item1_Img2',
    component: Item1_Img2
  },
  {
    path: '/Item1_Img3',
    component: Item1_Img3
  },
  {
    path: '/Item1_Img4',
    component: Item1_Img4
  },
  {
    path: '/Item1_Img5',
    component: Item1_Img5
  },
  {
    path: '/Item1_Img6',
    component: Item1_Img6
  },
  {
    path: '/Item1_Img7',
    component: Item1_Img7
  },
  {
    path: '/Item1_Img8',
    component: Item1_Img8
  },
  {
    path: '/Item1_Img9',
    component: Item1_Img9
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
  },
  {
    path: '/Slider_RIP',
    component: Slider_RIP
  },
  {
    path: '/Slider_KE',
    component: Slider_KE
  },
  {
    path: '/Slider_BB',
    component: Slider_BB
  },
  {
    path: '/Slider_BH',
    component: Slider_BH
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
