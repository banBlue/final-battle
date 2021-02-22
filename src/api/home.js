const api = {
  login1:{ // 使用验证码或密码进行登陆
    url: `/v1/low_websocket/send_message`,
    method: 'post'
  },
  dds2:  '/v1/low_websocket/chat_data'
}

export default api