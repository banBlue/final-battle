export default [
  {
    path: '/about',
    component: () => import(`../views/home.vue`),
    meta: {
      haha:'222'
    }
  },
]