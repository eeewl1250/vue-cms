import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/components/Layout'

Vue.use(VueRouter)

const router =  new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'home',
          component: () => import('@/views/Home'),
        },
        {
          path: '403',
          component: () => import('@/components/403')
        },
        {
          path: '*',
          component: () => import('@/components/404')
        }
      ]
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

export default router