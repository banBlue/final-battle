import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
const myPlugin = require("./myPlugin")
/**
 * @type {import('vite').UserConfig}
 */
export default {
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
