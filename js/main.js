// navigation start
const nav_toggle = document.querySelector('.nav_toggle');
const side_content = document.querySelector('.side_content');
const side_nav = document.querySelector('#side_nav');
console.log(side_nav)
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
  strings: ['Aadel Banat','a Web Designer','a Freelanacer'],
  autoStart: true,
  loop: true,
});
// Typewriter end

