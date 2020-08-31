import path from 'path'
import ViteComponents from 'vite-plugin-components'

const alias = {
  '/~/': path.resolve(__dirname, 'src'),
}

export default {
  alias,
  plugins: [
    ViteComponents({ alias })
  ]
};