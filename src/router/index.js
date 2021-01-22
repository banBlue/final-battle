import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'

const routes = [
  {
    path: '/',
    component: home,
    meta: {
      haha:'222'
    }
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
    meta: {
      haha:'222'
    }
  },
  {
    path: '/test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test.vue'),
    meta: {
      haha:'222'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router