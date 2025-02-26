import gsap from 'gsap'

type GsapFunction = () => gsap.core.Tween
export function useGsap(callback: GsapFunction) {
  let tween: gsap.core.Tween
  onMounted(() => {
    tween = callback()
  })
  onUnmounted(() => {
    tween?.revert()
  })
}

export function useGsapContext(callback: gsap.ContextFunc) {
  let ctx: gsap.Context
  onMounted(() => {
    ctx = gsap.context(callback)
  })
  onUnmounted(() => {
    ctx.revert()
  })
}
