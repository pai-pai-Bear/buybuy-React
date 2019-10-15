import BScroll from '@better-scroll/core'

export function bs(tap, x=false, y=false) {
  new BScroll(tap, {
    click: true,
    scrollX: x,
    scrollY: y
  })
}