const navigation = document.querySelector('nav');
const delivery = document.querySelector('.delivery');
const overlay = document.querySelector('.overlay');
const indicator = document.querySelectorAll('.indicator span');
const storyContent = document.querySelectorAll('.story-content');


// banner background animation 
for(var i=0;i<170;i++){
    let element = document.createElement('div');
    element.setAttribute('class','bg');
    overlay.appendChild(element);
}  

setInterval(function(){
    const bg = document.querySelectorAll('.bg');
    for(var i=0;i<bg.length;i++){
        let v = Math.floor(Math.random()*i);
        bg[v].style.backgroundPositionX = Math.floor(Math.random()*30)+'px';
        bg[v].style.backgroundPositionY = Math.floor(Math.random()*10)+'px';
    
    }  

},500);

// cerasol function

let value = {index:0};

console.log(indicator)
for(value.index= 0;value.index<indicator.length;value.index++){
    // value.index = i;
    // value.index = 2;
    indicator[value.index].addEventListener('click',function(e){
        for(var x=0;x<storyContent.length;x++){

            indicator[x].className = ' ';
            storyContent[x].className = 'story-content hide';
            console.log(storyContent[x])
        }
        this.className = 'active';
        document.getElementById(this.dataset.id).className = 'story-content show';
        
    })
}

// cursor moving function

const cursorBg = document.querySelector('.cursor-bg');
const cursorPoint = document.querySelector('.cursor-point');
const body = document.querySelector('body');


window.addEventListener('mousemove',function(e){
    
    let valueX = e.pageX;
    let valueY = e.pageY;

    cursorBg.style.left = valueX+'px';
    cursorBg.style.top = valueY+'px';

    cursorPoint.style.left = valueX+'px';
    cursorPoint.style.top = valueY+'px';
    console.log(cursorPoint.style.zIndex)
})


// window scroling function 
window.addEventListener('scroll',function(){
    let y = window.scrollY;

    if(y>700){
        navigation.setAttribute('class','active');
        delivery.classList.add('active');
    }else{
        navigation.removeAttribute('class','active')
        delivery.classList.remove('active');
    }
})
