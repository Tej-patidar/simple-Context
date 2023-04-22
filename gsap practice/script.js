const tl=gsap.timeline();


tl.from('#logo',{
    y:-100,
    duration:1,
    delay:1,
})

tl.from('li',{
    y:-100,
    duration:1,
    // delay:1,
    stagger:.3
})
tl.from('h1',{
    x:-620,
    duration:1,
    // delay:1,
    // stagger:.3
})

tl.from('p',{
    x:-800,
    duration:1,
    // delay:1,
    // stagger:.3
})

tl.from('button',{
    // x:-700,
    opacity:0,
    scale:.5,
    duration:1,
    // delay:1,
    // stagger:.3
})

tl.from ('img',{
    x:100,
    opacity:0,
    scale:.2
})



