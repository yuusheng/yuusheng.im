export default defineEventHandler(async () => {
  return {
    api: 'works',
    data: {
      msg: 'ok',
    },
  }
})
