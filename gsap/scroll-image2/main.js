gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ease: "none",duration: 2})

let sections = gsap.utils.toArray(".box");

gsap.to(sections ,{
    xPercent: - 100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: '#container',
        onUpdate: (self)=> console.log(self.getVelocity()),
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: ()=> "+=" +
        document.querySelector('#container').offsetWidth
        
    }
})

// ScrollTrigger.create({
//     trigger: box,
//     start: "top top",
//     pin: true,
//     pinSpacing: false,

// })

// const tl = gsap.timeline();

// tl.from('.c',{xPercent: -100})
// .from('.d',{xPercent: 100})
// .from('.e',{yPercent: -100})
// // .from('.f',{y: "100%"})
// // .from('.f',{x: "-100vw"})

// // const section = gsap.utils.toArray(".box");

// ScrollTrigger.create({
//     animation: tl,
//     trigger: "#container",
//     start: "center center",
//     // end: "+=400",
//     scrub: true,
//     pin: true,
//     anticipatePin: 1
//     // pinSpacing: false
// })

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



// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   }
// });

