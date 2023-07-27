


// testimonial swiper function
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop:true,
});

// our Menu swiper function
var swiper = new Swiper(".myMenu", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    loop:true,
    // breakpoints: {
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    //   1024: {
    //     slidesPerView: 5,
    //     spaceBetween: 50,
    //   },
    // },
  });


  // cursor moving function

const cursorBg = document.querySelector('.cursor-bg');

window.addEventListener('mousemove',function(e){
    
    let valueX = e.pageX;
    let valueY = e.pageY;

    cursorBg.style.left = valueX+'px';
    cursorBg.style.top = valueY+'px';
})

// navigation positon
const navigation = document.querySelector('nav');

window.addEventListener('scroll',(e)=>{
  let y = window.scrollY;

  if(y> 700){
    
    navigation.setAttribute('class','collapse');
  }else{
    navigation.removeAttribute('class','collapse');
  }
  console.log(e);
})
// console.log(document.pageY);

// menu button click and show menubar

const menu_btn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
const nav_link = document.querySelectorAll('.menu li');

menu_btn.addEventListener('click',function(){
  menu.classList.toggle('collapse');
})

for(item of nav_link){
  item.addEventListener('click',function(){
    menu.classList.toggle('collapse');    
  })
}