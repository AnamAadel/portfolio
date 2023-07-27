$(document).ready(function(){
    $(window).scroll(function(){
      var y = window.scrollY;
      console.log(y);
      if(y>300){
        $('.navbar').addClass('fixed');
      }else{
        $('.navbar').removeClass('fixed');

      }
    })
    $('.nav-link').click(function(){
      $('.navbar-collapse').removeClass('show');
    })


    


    // slick slider control code for banner
    $('.banner_slide').slick({
        dots: false,
        // infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
      });


    // slick slider control code for services
    $('.service_content').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      vertical: true,
      arrows: true,
      prevArrow: $('.up'),
      nextArrow: $('.down'),
      centerMode: true,
      autoplay: true,
      verticalSwiping: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: 'unslick',
        },
      ],
    });

    // slick slider control code for testimonials

    $('.user_comment').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.testimon_content',
      // responsive: [
      //   {
      //     breakpoint: 1008,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
      //   {
      //     breakpoint: 767,
      //     settings: 'unslick',
      //   },
      // ],
    });
    
    $('.testimon_content').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.user_comment',
      centerMode: true,
      focusOnSelect: true,
      arrows: true,
      prevArrow: $('.test_up'),
      nextArrow: $('.test_down'),
      centerMode: true,
      autoplay: true,
      vertical: true,
      verticalSwiping: true,
      responsive: [
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // vertical: true,
            // verticalSwiping: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // vertical: false,
            // verticalSwiping: false,
          },
        },
      ],
    });


    new VenoBox({
      selector: '.port_imagte',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
  });
    

  $('.counter').counterUp({
    time:3000,
    delay: 50

})
      
})

// vanilla javascript

const about_box = document.querySelectorAll('.about_box');
const dots = document.querySelectorAll('.dot');
// const pagination = document.querySelector('.pagination');

let obj = {ind: 0,speed: 3000};

for(var i=0;i<dots.length;i++){
  dots[i].setAttribute('data-num',i);
  about_box[i].setAttribute('data-num',i);

  
  about_box[i].addEventListener('click',showObj);
  
}
for(item of dots){

  item.addEventListener('click',showObj);
}

setInterval(counter,obj.speed);


function counter(e){
  obj.ind ++;
  // obj.ind = num;
  if(obj.ind >= about_box.length){
    obj.ind = 0;
    }
    obj.ind
  // console.log(obj.ind);
  for(item of about_box){
    item.classList.remove('active');
    item.classList.remove('animated');
    item.classList.remove('rubberBand');
  }
  
  // console.log(dots);
  for(item of dots){
    item.classList.remove('active');
    // console.log(item);
  }

  about_box[obj.ind].classList.add('active');
  about_box[obj.ind].classList.add('animated');
  about_box[obj.ind].classList.add('rubberBand');
  dots[obj.ind].classList.add('active');
}


function showObj(){

  obj.ind = parseFloat(this.getAttribute('data-num'));
  console.log(this.getAttribute('data-num'));
  
  for(item of about_box){
    item.classList.remove('active');
    item.classList.remove('animated');
    item.classList.remove('rubberBand');
  }
  
  // console.log(dots);
  for(item of dots){
    item.classList.remove('active');
    // console.log(item);
  }

  about_box[obj.ind].classList.add('active');
  about_box[obj.ind].classList.add('animated');
  about_box[obj.ind].classList.add('rubberBand');
  dots[obj.ind].classList.add('active');
  
  
}
