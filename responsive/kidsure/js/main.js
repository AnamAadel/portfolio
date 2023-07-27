$(document).ready(function(){
    
})

// navbar menu show & hide

const navbar_collapse = document.querySelector('.navbar-collapse');
const nav_link = document.querySelectorAll('.nav_link');

for(item of nav_link){
  item.addEventListener("click",function(){
    navbar_collapse.classList.remove('show');
  })
}




const navbar = document.querySelector('.navbar');
const contact_link = document.querySelector('.contact_link');

window.addEventListener('scroll',function(){
  let scrolling = window.scrollY;
  if(scrolling>= 200){
    navbar.classList.add('flowTop');
    contact_link.style.display = "none";
  }else{
    navbar.classList.remove('flowTop');
    contact_link.style.display = "flex";
    
  }
})

// hover effect

const prog_box = document.querySelectorAll('.prog_box');
const shape = document.querySelectorAll('.shape');


for(item of shape){
  item.addEventListener('mouseover', function(){

    console.log();
    this.children[0].children[0].children[0].setAttribute('d',"M12,12 A60,50 0 0,1 88,12 M88,12 A30,50 0 0,1 88,88 M88,88 A60,50 0 0,1 12,88 M12,88 A30,50 0 0,1 12,12 M12,12 88,12 88,88 12,88");
    for(item of shape){

    }
  })

  item.addEventListener('mouseleave', function(){
    this.children[0].children[0].children[0].setAttribute('d',"M6,6 A110,50 0 0,1 94,6 M94,6 A11,50 1 0,1 94,94 M94,94 A110,50 0 0,1 6,94 M6,94 A10,50 0 0,1 6,6 M6,6 94,6 94,94 6,94"); 
    for(item of shape){
  
    }
  })

}

for(item of prog_box){
  item.addEventListener('mouseover',function(){
    const shape1 = this.querySelector('.shape1');
    const shape2 = this.querySelector('.shape2');
    
    shape1.setAttribute("d","M12,12 A60,50 0 0,1 88,12 M88,12 A30,50 0 0,1 88,88 M88,88 A60,50 0 0,1 12,88 M12,88 A30,50 0 0,1 12,12 M12,12 88,12 88,88 12,88")
    shape2.setAttribute("d","M14,14 A60,50 0 0,1 86,14 M86,14 A30,50 0 0,1 86,86 M86,86 A60,50 0 0,1 14,86 M14,86 A30,50 0 0,1 14,14 M14,14 86,14 86,86 14,86");
  })

  item.addEventListener('mouseleave',function(){
    const shape1 = this.querySelector('.shape1');
    const shape2 = this.querySelector('.shape2');
    
    shape1.setAttribute("d","M6,6 A110,50 0 0,1 94,6 M94,6 A10,50 0 0,1 94,94 M94,94 A110,50 0 0,1 6,94 M6,94 A10,50 0 0,1 6,6 M6,6 94,6 94,94 6,94")
    shape2.setAttribute("d","M8,8 A110,50 0 0,1 92,8 M92,8 A10,50 0 0,1 92,92 M92,92 A110,50 0 0,1 8,92 M8,92 A10,50 0 0,1 8,8 M8,8 92,8 92,92 8,92");
  })
}

// teacher setting

const setting = document.querySelectorAll('.setting');

for(item of setting){
  item.addEventListener('click',function(){
    this.closest('.teach_box').classList.toggle('active');
    console.log(this.closest('.teach_box'));
    // this.children[0].classList.toggle('fas fa-ellipsis-h');
  })
}

// gallery sliding part

var swiper = new Swiper(".gallery_content", {
  // slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 20,
      
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// testimonial sliding part

var swiper = new Swiper(".test_commend", {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".button_next",
    prevEl: ".button_prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 80,
      
    },

    772: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});