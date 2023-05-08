import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      '@storyblok/svelte': './node_modules/@storyblok/svelte',
      $components: 'src/lib/components',
      $stores: 'src/lib/stores'
    },
    adapter: adapter()
  },
  preprocess: [
    preprocess({
      postcss: true
    })
  ]
}

export default config
