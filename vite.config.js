import vue from '@vitejs/plugin-vue'
const vitePluginRouterComponent = require("./vite-plugin-router-component")

const path = require('path')

export default {
  server: {
    proxy: { // 接口地址代理转换
      '^/v1': {
        target: 'https://haidj.top',
        changeOrigin: true,
      }
    }
  },

  alias: {
    // 键必须以斜线开始和结束
    '@': path.resolve(__dirname, './src')
  },
  plugins: [
    vue(),
    vitePluginRouterComponent()
  ]
}
