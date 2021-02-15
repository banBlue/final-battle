export default [
  {
    path: '/test',
    component: () => import(`../views/test.vue`),
    meta: {
      haha:'222'
    }
  }
]