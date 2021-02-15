import { createRouter, createWebHashHistory } from 'vue-router'

const routerModule = (() => { // 动态加载js文件模块
  const importModule = import.meta.globEager('./*.js')
  console.log(`--DEBUG--importModule`,importModule)
  return Object.keys(importModule).reduce((prev,cur) => {
    prev.push(...importModule[cur].default)
    return prev
  },[])
})()

const routes = routerModule

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router