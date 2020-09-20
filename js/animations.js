const controller = new ScrollMagic.Controller()

const tl = gsap.timeline()
tl.from('.summary .title', 0.4, {
  opacity: 0,
  transform: 'translateX(-50px)'
}, 0.1)
tl.staggerFrom('.summary li', 0.4, {
  opacity: 0,
  transform: 'translateX(-50px)'
}, 0.1)

const scene = new ScrollMagic.Scene({
    triggerElement: '.summary',
    triggerHook: 0.5
  })
  .setTween(tl)
  .addTo(controller)


for (let i = 1; i < 9; i++) {

  const tlc = gsap.timeline()
  tlc.staggerFrom(`.c${i} > div *`, 0.7, {
    opacity: 0,
    transform: 'translateX(-70px)'
  }, 0.1, '+=0.3')

  const scenec = new ScrollMagic.Scene({
      triggerElement: `.c${i}`,
      triggerHook: 0.5,
    })
    .setTween(tlc)
    .addTo(controller)
    .reverse(false)
}

const tl2 = gsap.timeline()
tl2.staggerFrom('.nav li', 0.4, {
  opacity: 0,
  transform: 'translateX(-50px)'
}, 0.1, '+=1')

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.c1',
    triggerHook: 0,
  })
  .setTween(tl2)
  .addTo(controller)

for (let i = 1; i < 9; i++) {

  const scenep = new ScrollMagic.Scene({
      triggerElement: `.c${i}`,
      triggerHook: 0.2,
      duration: getComputedStyle(document.querySelector(`.c${i}`)).height
    })
    .setClassToggle(`.nav .item${i}`, 'active')
    .addTo(controller)
}