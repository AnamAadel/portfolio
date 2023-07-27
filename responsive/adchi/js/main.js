// "use strict"


const menu = document.querySelector('.menu_icon');
const menu_box = document.querySelector('.menu_box');
const menu_items = document.querySelectorAll('.menu_box ul li');



menu.addEventListener('click',function(){
    this.classList.toggle('display');
    menu_box.classList.toggle('display');
    const clName =  menu_box.classList.contains('display');

    const tl = gsap.timeline({
        duration: .5,
        delay: .5,
    });

    if(clName){
        tl.fromTo([menu_items,".menu_box .social_links",".menu_box .order_box .btn"],{
            opacity: 0,
            scale: 0,
            y: 10,
            
        },{
            stagger: 0.3,
            opacity: 1,
            scale: 1,
            y: 0,
        
        }
        )
    }else{
        tl.fromTo(menu_items,{
            opacity: 1,
            scale: 1,
            y: 10,
            
        },{
            duration: .1,
            opacity: 0,
            scale: 0,
            y: 0,
        
        }
        )
    }
    
});

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector('header');
ScrollTrigger.create({
    trigger: 'header',
    start: "300% 20%",
    end: "top 30%",
    onEnter: el => {
        const clName =  menu_box.classList.contains('display');

        if(clName){
            header.classList.remove("sticky");
            
        }else{
            header.classList.add("sticky");

        }
    },
    onLeaveBack: el => {
        header.classList.remove("sticky");
    },
});

ScrollTrigger.create({
    trigger: '#mission',
    onEnter: el => {
        gsap.fromTo('#mission',{
            x:"-100%",
            opacity: 0,
        },{
            x:"0%",
            opacity: 1,
            duration: 2
        })
    }
});


ScrollTrigger.create({
    trigger: '.pic_scaled',
    onEnter: el => {
        gsap.fromTo('.pic_scaled',{
            scale: 0,
            opacity: 0,
        },{
            scale: 1,
            opacity: 1,
            duration: 2
        })
    }
});


const ttl = gsap.timeline();

gsap.utils.toArray(".text_rot").forEach(text =>{

    text.innerHTML = text.textContent.replace(/\S/g,"<span class='text_anim'>$&</span>");

    const text_el = text.querySelectorAll('.text_anim');

    gsap.fromTo(text_el,{rotationY: 300 , opacity:0},{
        scrollTrigger:{
            trigger: text,
            onUpdate:() =>{
                
            }
        },
        rotationY: 360,
        duration: .3,
        opacity: 1,
        stagger: 0.2
        
    }).then(( el)=>{
        text.innerHTML = text.textContent.replace("<span class='text_anim'>$&</span>",/\S/g);
    })
})








gsap.to('.rotate',{
    rotate: 360,
    duration: 37,
    repeat: -1,
    ease: Power0.easeNone

})

gsap.to('.menu_items .transFY',{
    y: 20,
    duration: 5,
    repeat: -1,
    ease: Power0.easeNone,
    yoyo: true

})
gsap.to('.menu_items .tranf-Y',{
    y: -20,
    duration: 5,
    repeat: -1,
    ease: Power0.easeNone,
    stagger: .2,
    yoyo: true

})