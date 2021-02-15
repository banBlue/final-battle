export default [
  {
    path: '/',  
    redirect:'/home',
  },
  {
    path:'/home',  
    component:  '@/views/home.vue',    
    meta: {
      haha:'222'
    }
  }
]