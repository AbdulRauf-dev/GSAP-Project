let tl = gsap.timeline();

tl.from("#nav h3", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    stagger: 0.3
})
tl.from("#main h1", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    stagger: 0.3
})

tl.from("img", {
    x: 100,
    rotate: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

tl.from("#footer h3", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})