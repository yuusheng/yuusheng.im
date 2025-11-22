import { createCanvas } from 'canvas'
import { addServerHandler, createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'hello',
  },
  setup() {
    console.log('createCanvas', createCanvas)
    // const resolver = createResolver(import.meta.url)
    //
    // // Add an API route
    // addServerHandler({
    //   route: '/api/hello',
    //   handler: resolver.resolve('./runtime/api-route'),
    // })
  },
})
