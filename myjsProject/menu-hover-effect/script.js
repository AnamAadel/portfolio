const menu = document.querySelector(".menu");
const indicator = document.querySelector(".indicator"),
items = document.querySelectorAll(".item");

let activePosition = 0;
let compareArr = [16];

function indicatorEffect(){
    this.classList.add("active");

    compareArr.push(this.offsetLeft);
    if(compareArr.length > 2){
        compareArr.shift();
    }
    console.log(compareArr)
    let nextelement = this.nextElementSibling
    let prevelement = this.previousElementSibling
    // definding indicator width start
    let indiWidth = (prevelement) ?
     // if previus element exists
    this.offsetLeft - (prevelement.offsetLeft + prevelement.offsetWidth) :
    // if previus element does not exists
    nextelement.offsetLeft - (this.offsetWidth + this.offsetLeft);
    
    if( compareArr[0] < compareArr[1] ){
        const next = menu.querySelector(".indicator.next");
        indicator.style.width = `${this.offsetWidth * 2 + indiWidth}px`
        console.log("next")
        
        setTimeout(()=> {
            indicator.style.left =  `${this.offsetLeft}px`
            indicator.style.right =  `${menu.offsetWidth - (this.offsetLeft + this.offsetWidth)}px`
            indicator.style.width =  `${this.offsetWidth}px`

            menu.querySelectorAll(".active")[0].classList.remove("active");
            prevelement && prevelement.classList.remove("active");
        }, 100)
    } 
    
    if(compareArr[0] > compareArr[1]){
        indicator.style.right =  `${menu.offsetWidth - (this.offsetLeft + this.offsetWidth)}px`
        indicator.style.left =  `${this.offsetLeft}px`
        indicator.style.width =  `${this.offsetWidth * 2 + indiWidth}px`
        setTimeout(()=> {
            indicator.style.width =  `${this.offsetWidth}px`
            menu.querySelectorAll(".active")[1].classList.remove("active");
            nextelement && nextelement.classList.remove("active");
        }, 100)
    }

}

menu.addEventListener('mousemove',(e)=> activePosition = e.offsetX)
items.forEach((item)=>{
    item.addEventListener("mouseover", indicatorEffect);
    item.addEventListener("mouseout", ()=>{
        indicator.style.width = `${item.offsetWidth}px`

    });
})
