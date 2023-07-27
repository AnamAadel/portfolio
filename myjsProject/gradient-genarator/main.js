const colorInput = document.querySelectorAll('.colors input');
const showProperty = document.querySelector('.showText');
const direction = document.querySelector('.dirBtn');
const main_box = document.querySelector('.main_box');
const refresh = document.querySelector('.refresh');
const copy = document.querySelector('.copy');
const title = document.querySelector('.title');



function rendomGradient(){
    //Generating a random color in hexadecimal format.
    const randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
    return `#${randomHex}`;
}

function generateGradient(isrendomGrad){
    if(isrendomGrad){
        colorInput[0].value = rendomGradient();
        colorInput[1].value = rendomGradient();
    }

    let gradient = `linear-gradient(${direction.value}, ${colorInput[0].value}, ${colorInput[1].value})`;

    main_box.style.backgroundImage = gradient;

    showProperty.innerText = `background: ${gradient}`;
}

colorInput.forEach((input)=>{

    input.addEventListener('input',()=> generateGradient(false))
})

function copycodeGener(){
    navigator.clipboard.writeText(showProperty.innerText);

    copy.innerHTML = "Code copyed";

    setTimeout(()=>{
        copy.innerHTML = "Copy code";
    },2000);

    
}

direction.addEventListener('change',()=> generateGradient(false));
refresh.addEventListener('click',()=> generateGradient(true));
copy.addEventListener('click', copycodeGener);
showProperty.addEventListener("click",copycodeGener)