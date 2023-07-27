// navigation start
const nav_toggle = document.querySelector('.nav_toggle');
const side_content = document.querySelector('.side_content');
const side_nav = document.querySelector('#side_nav');
let inWidth = window.innerWidth;
if(inWidth<= 992){
  nav_toggle.addEventListener('click',function(){
    this.classList.toggle('boom');
    side_content.classList.toggle('boom');

  })
}
const item_link = document.querySelectorAll('.item_link');

for(item of item_link){
  item.addEventListener('click',function(){
    side_content.classList.remove("boom");

    if(nav_toggle.classList.contains('boom')){
      nav_toggle.classList.remove('boom');
      side_content.classList.remove('boom');
    }
  })
}

window.addEventListener('scroll',function(){
  let inWidth = window.innerWidth;
  if(inWidth < 992){
    const scrolling = window.scrollY;
    if(scrolling>70){
      side_nav.classList.add('boom');
    }else{
      side_nav.classList.remove('boom');
      
      if(nav_toggle.classList.contains('boom')){
        nav_toggle.classList.remove('boom');
        side_content.classList.remove('boom');
      }

    }

  }

  
})


// navigation end


// Typewriter start
new Typewriter('.profession', {
  strings: ['Aadel Banat','an Web Designer','a Freelanacer'],
  autoStart: true,
  loop: true,
});
// Typewriter end


// show web page inside the page start
const proj_box = gsap.utils.toArray(".proj_box"),
boxes = gsap.utils.toArray(".demo"),
livePreviewBox = document.querySelector(".livePreviewBox"),
closeBtn = livePreviewBox.querySelector(".close"),
liveContent = document.querySelector(".liveContent")


boxes.forEach((box)=>{
    
    
    box.addEventListener("click",()=>{
      livePreviewBox.classList.add("active");
      
      liveContent.src = box.nextElementSibling.href;
          closeBtn.addEventListener("click",function(){
            livePreviewBox.classList.remove("active");
          })
          
    })

    box.addEventListener("mouseover",()=>{
      box.nextElementSibling.innerText = `click to see live preview in this page`
    })

    box.addEventListener("mouseleave",()=>{
      box.nextElementSibling.innerText = `live preview`
    })
})


// show web page inside the page end






// scroll effect on demo box start
const proxy = {skew: 0},
skewSetter = gsap.quickSetter(".demo","skewY","deg"),
menuItemSkewSetter = gsap.quickSetter(".item_link","skewY","deg"),
clamp = gsap.utils.clamp(-20,20);

// skewSetter(-5.369)

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    onUpdate:(self) =>{
        let skew = clamp(self.getVelocity() / 430);

        // console.log(skew) 
        
        if(Math.abs(skew) > Math.abs(proxy.skew)){
            proxy.skew = skew;
            
            
            gsap.to(proxy, 
            {skew: 0,
            duration: .8,
            overwrite: true,
            ease: "power3",
            onUpdate: () => {
                skewSetter(proxy.skew);
                menuItemSkewSetter(proxy.skew);
            }
            })

        }
    },
})
// skewSetter(20)

gsap.set(".item_link",{transformOrigin: "left center",});
// gsap.set(".demo",{transformOrigin: "left center",});


// scroll effect on demo box end

gsap.registerPlugin(ScrollTrigger);



const tAni = gsap.utils.toArray(".tAni").forEach(tAni=>{
  gsap.set(tAni, { y: 65, opacity:0 });
  gsap.to(tAni,{
    
    scrollTrigger:{
      trigger: tAni,
      toggleActions: "restart pause resume reverse",
    },
    y: 0, opacity:1, duration: .2
  })

})

  // progressbar function
  
  const count = {ind: 0};
  gsap.utils.toArray(".prog_group").forEach(prog =>{
     
  const prog_bar = prog.querySelector('.progress-bar');
    ScrollTrigger.create({
          trigger: prog,
          start: "bottom bottom",
          onEnter: pro =>{
            
            increaseing(prog,prog_bar);
            
            
          },
          onLeave:()=>{
            prog_bar.style.width = "0%";
          },
          onEnterBack:()=>{
            increaseing(prog,prog_bar);
          },
          onLeaveBack:()=>{
            prog_bar.style.width = "0%";
          }

      })
  })

  function increaseing(prog,prog_bar){
    let parc = prog.querySelector('.parc');
            let value = prog.querySelector('.parc').getAttribute('data-parc');
            gsap.to(count,{
              duration: 1,
              ind: value,
              onUpdate:() =>{
                parc.textContent = Math.floor(count.ind)+"%";

                gsap.to(prog_bar,{
                  width: count.ind + "%"
                })
              }

            })
  }

  // progressbar function end

// gsap fliping effenct




// gsap animation
const hText = document.querySelector('#text').children

const ti = gsap.timeline({
  ease: "back",
  duration: .2,
  
  

});
ti.fromTo('.pars_image',
    {
      scale: 0,
      opacity: 0
    },
    {
      scale:1,
      opacity: 1,
      stagger: 0.1,
      
 })
.fromTo('.name',
    {
      y: 30,
      opacity: 0
    },
    {
      y:0,
      opacity: 1,
      stagger: 0.1,
 })
.fromTo('.item_link',
    {
      x: -50,
      opacity: 0
    },
    {
      x:0,
      opacity: 1,
      stagger: 0.1,
 })
.fromTo('.btn',
    {
      y: -50,
      opacity: 0
    },
    {
      y:0,
      opacity: 1,
      // stagger: 0.1,
 })
gsap.fromTo('.op',
    {
      y: 50,
      opacity: 0
    },
    {
      y:0,
      opacity: 1,
      stagger: 0.1,
      duration: 1
 })
  





