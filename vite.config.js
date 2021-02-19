import vue from '@vitejs/plugin-vue'
const vitePluginRouterComponent = require("./vite-plugin-router-component")

const path = require('path')

/**
 * @type {import('vite').UserConfig}
 */
export default {
  alias: {
    // 键必须以斜线开始和结束
    '@': path.resolve(__dirname, './src')
  },
  plugins: [
    vue(),
    vitePluginRouterComponent()
  ]
}
