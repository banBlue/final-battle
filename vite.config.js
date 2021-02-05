import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
const myPlugin = require("./myPlugin")

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
    myPlugin(),
     ViteComponents({
      // relative paths to the directory to search for components.
      dirs: ['src/components'],

      // valid file extensions for components.
      extensions: ['vue'],
      // search for subdirectories
      deep: true,

      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: false,
      // Subdirectory paths for ignoring namespace prefixes
      // works when `directoryAsNamespace: true`
      globalNamespaces: [],
    })
  ]
}
