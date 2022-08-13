/*----------------------------------------------------
  ファーストビュー
-----------------------------------------------------*/
gsap.from('.fv__title', {
  duration: 1,
  ease: "power2.out",
  y: 30,
  opacity: 0,
  delay: 1,
})
gsap.from('.fv__title--sub', {
  duration: 1,
  ease: "power2.out",
  y: 30,
  opacity: 0,
  delay: 1.5,
})

/*----------------------------------------------------
  創業の思い
-----------------------------------------------------*/
const tlDesire01 = gsap.timeline({
  defaults: {
    duration: .5,
    ease: "power2.out"
  },
  scrollTrigger: {
    trigger: '#js-scroll01',
    start: 'top center',
  }
});
tlDesire01.from('#js-scroll01 .desire-image', {
  opacity: 0,
  y: -50
});
tlDesire01.from('#js-scroll01 .desire-text', {
  opacity: 0,
  y: -50
});

const tlDesire02 = gsap.timeline({
  defaults: {
    duration: .5,
    ease: "power2.out"
  },
  scrollTrigger: {
    trigger: '#js-scroll02',
    start: 'top center',
  }
});
tlDesire02.from('#js-scroll02 .desire-image', {
  opacity: 0,
  y: -50
});
tlDesire02.from('#js-scroll02 .desire-text', {
  opacity: 0,
  y: -50
});


/*----------------------------------------------------
  季節のコース
-----------------------------------------------------*/
gsap.set('.card', {
  x: -100,
  opacity: 0
})

ScrollTrigger.batch(".card", {
  start: 'center bottom-=100',
  once: true,
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    x: 0,
  }),
});