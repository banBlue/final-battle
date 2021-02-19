# final-battle

### 关于api使用示例
- axiosConfig 用于处理axios定义的一些配置
- customData  用于处理用户自定义的一些参数
```js
{
  //使用post时候
  'loginDefault1': { // 使用验证码或密码进行登陆
    url: `/user_auth_web.json`,
    method: 'post'
  }
  //使用get时候
  'loginDefault2': { // 使用验证码或密码进行登陆
    url: `/user_auth_web.json`,
    method: 'get'
  }
  //使用get时候
  'loginDefault2': 'gateway/v1/login_default.json',
  //完整版
  'loginDefault2': {
    url: `/user_auth_web.json`,
    method: 'post',
    customConfig: {showErrorToast: true,showFetchLoading: true} //这里的参数自己随便玩自定义}
  }
}
```

### 关于router使用示例
- 此处只对component进行了优化,其他配置参考vue-router进行配置即可
```js
  {
    path:'/about',
    //这里的component请直接填写views文件夹下的文件路径, 会搭配vite-plugin-router-component 转换成搭配懒加载模式 () => import("../views/about.vue")
    component:  '/views/about.vue',
    meta: {
      haha:'222'
    }
  }
```