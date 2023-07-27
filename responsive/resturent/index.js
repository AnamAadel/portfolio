$(document).ready(function(){
    $('.searchBtn').click(function(){
        $('.form').addClass('focus');
    })
    $('.navbar-nav ,.banner,section').click(function(){
        $('.form').removeClass('focus');
    })
    $('.nav-link').click(function(){
        $('.navbar-collapse').removeClass('show');
    })
    // window when loading
    $(window).load(function(){
        $('.preload').addClass('fadeOut');
    })
    // window whin scrolling
    $(window).scroll(function(){
        let y = $(this).scrollTop();
        if(y>300){
            $('nav').addClass('position');
        }else{
            $('nav').removeClass('position');

        }

    })

    // counter function

    $('.counter').counterUp({
        time:3000,
        delay: 50

    })


})

//***************** */ custom js

document.addEventListener('mousemove',parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(function(layer){
        let speed = layer.getAttribute('data-speed');
        
        let x = (window.innerWidth - e.pageX*speed)/100;
        let y = (window.innerHeight - e.pageY*speed)/100;
        layer.style.transform = `translate(${x}px,${y}px)`;
    })
   const cusor =  this.querySelector('.cursor');

   let posX = e.pageX;
   let posY = e.pageY;

   cusor.style.left = posX+'px';
   cusor.style.top = posY+'px';
}