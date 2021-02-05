export default [
  {
    path: '/',
    /* @vite-ignore */
    component:  () => import(`../views/home.vue`),
    /* @vite-ignore */
    meta: {
      haha:'222'
    }
  }
]