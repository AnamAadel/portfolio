gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none",duration: 2})

// const section = gsap.utils.toArray(".box");

// gsap.to(section,{
//     x: -(section.length-1)+"00vw",
//     ease: "none",
//     scrollTrigger: {
//         trigger: '#container',
//         pin: true,
//         scrub: 1,
//         snap: 1 / (section.length - 1),
//         end: ()=> "+=" +
//         document.querySelector('#container').offsetWidth
        
//     }
// })

// ScrollTrigger.create({
//     trigger: box,
//     start: "top top",
//     pin: true,
//     pinSpacing: false,

// })

const tl = gsap.timeline();

tl.from('.c',{xPercent: -100})
.from('.d',{xPercent: 100})
.from('.e',{yPercent: -100})
// .from('.f',{y: "100%"})
// .from('.f',{x: "-100vw"})

// const section = gsap.utils.toArray(".box");

ScrollTrigger.create({
    animation: tl,
    trigger: "#container",
    start: "center center",
    onUpdate: (self)=> console.log(self.getVelocity() / 600),
    scrub: true,
    pin: true,
    anticipatePin: 1
    // pinSpacing: false
})

// gsap.to(".b",{
//     scrollTrigger: {
//         trigger: ".b",
//         start: "70% 90%",
//         markers: true,
//         toggleActions: "restart pause reverse puese",
//         // endTrigger: ".c",
//         // end: "top 30%",
//         scrub: 5,
//         pin: ".a",

//     },
//     x: 400,
//     duration: 2,
//     rotation: 360,
    
    
// })