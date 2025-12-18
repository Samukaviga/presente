import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageTwo from '@/views/PageTwo.vue'
import PageTree from '@/views/PageTree.vue'
import PageFor from '@/views/PageFor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/dois',
      name: 'PageTwo',
      component: PageTwo,
    },

    {
      path: '/tres',
      name: 'PageTree',
      component: PageTree,
    },

    {
      path: '/quatro',
      name: 'PageFor',
      component: PageFor,
    },
  ],
})

export default router
