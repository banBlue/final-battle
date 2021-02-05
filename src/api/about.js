 const api = {
  login: { // 使用验证码或密码进行登陆
    url: `/nf_user_auth_web/ignore_tk/uc/v1/seller_login.json`,
    method: 'post'
  },
  dds: '/nf_user_auth_web1/ignore_tk/uc/v1/seller_login.json'
}

// export function getUserInfo(params) {
//   return request({
//     url: '/user/info/get',
//     method: 'get',
//     data:params
//   })
// }

export default {...api}