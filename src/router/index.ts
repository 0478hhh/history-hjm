import { createRouter, createWebHistory } from 'vue-router'
import HistoryHome from '../views/HistoryHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HistoryHome,
    },
    {
      path: '/wild',
      name: 'wild',
      // 野史 Side B 页面（懒加载，与原型中的独立板块对应）
      component: () => import('../views/HistoryOutside.vue'),
    },
  ],
  // 对应原型 openWild()/backMain() 中的 window.scrollTo(0,0)
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
