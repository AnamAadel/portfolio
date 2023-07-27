const navigation = document.querySelector('nav');

window.addEventListener('scroll',function(){
    let y = window.scrollY;
    if(y >700){
        navigation.setAttribute('class','collapse');
    }else{
        navigation.removeAttribute('class','collapse');

    }
})