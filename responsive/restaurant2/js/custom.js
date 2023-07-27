$(document).ready(function(){
  $(window).on('load',function(){
    $('.preload').fadeOut();
  })

  $('.search_btn').click(function(){
    $('.search_box').toggleClass('active');
    $('.search_box input').focus();
  })
  $('section').click(function(){
    $('.search_box').removeClass('active');
    
  })

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    console.log(scrolling);

    if(scrolling>350){
      $('.navbar').addClass('fixing');
      $('.menu_btn').addClass('showing')
      
    }
    else{
      $('.navbar').removeClass('fixing');
      $('.menu_btn').removeClass('showing')
      
    }
  })

  $('.menu_btn').click(function(){
    $('.navbar').toggleClass('showing');
    $('.navbar').toggleClass('disappear');
    $('.fa-bars').toggleClass('hide');
    $('.fa-times').toggleClass('hide');

  })
  $('.nav-link').click(function(){
    $('.navbar-collapse').removeClass('show');
  })

   
})


//***************** */ custom js
const cusor =  document.querySelector('.cursor');
const ingredient = document.getElementById('ingredient');

document.addEventListener('mousemove',parallax);
function parallax(e){

   let posX = e.pageX;
   let posY = e.pageY;

   cusor.style.left = posX+'px';
   cusor.style.top = posY+'px';
}

ingredient.addEventListener('mouseover',function(){
  cusor.style.transform = 'translate(-39%,-39%) scale(2)';
  cusor.style.transition = 'all linear .1s';
  
})
ingredient.addEventListener('mouseleave',function(){
  cusor.style.transform = 'translate(-39%,-39%) scale(1)';
  cusor.style.transition = 'all linear .1s';
})
ingredient.addEventListener('mousemove',function(){
  cusor.style.transition = 'all linear .0s';
})


// <!-- Initialize Swiper 

var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 7,
  // spaceBetween: 30,
  freeMode: true,
  navigation: {
  loop: true,
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  }
});

const myswiper = document.querySelector('.mySwiper');
myswiper.addEventListener('mouseover',function(){
  cusor.style.opacity = 0;
})
myswiper.addEventListener('mouseleave',function(){
  cusor.style.opacity = .4;
})