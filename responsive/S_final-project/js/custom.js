$(document).ready(function(){
    $(window).scroll(function(){
        let srolling = $(this).scrollTop();
        console.log(srolling);
        if(srolling >= 200){
            $('#banner .navbar').addClass('floatTop');
        }else{
            $('#banner .navbar').removeClass('floatTop');

        }
    })
    $('.picture_box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.message_box'
      });
      $('.message_box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.picture_box',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        pagination: false,
        nextArrow: ".next",
        prevArrow: ".prev",
        dots: false,
        centerPadding: "0px",
      });
          
})