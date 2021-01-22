import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    vue(),
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
