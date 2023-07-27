const box = document.querySelectorAll(".box");
const button = document.querySelector(".button");

button.addEventListener('click',function(e){
    console.log(e);
})
let grd = [];

box.forEach((el,index)=>{
    el.style.borderColor = el.getAttribute('data-bg');
    el.setAttribute('data-ind',index);
    el.addEventListener('click',function(){
        let ind = this.getAttribute('data-ind');
        const checkBox = this.querySelector('input');
        if(checkBox.checked == true){
            let bg = this.getAttribute('data-bg');
            this.style.backgroundColor = bg;

            grd.push(bg);

             if(grd.length == 1){
                button.style.backgroundColor = bg;
                button.style.backgroundImage = "";
            }else{
                button.style.backgroundImage = `linear-gradient(90deg, ${grd})`;
            }
            
        }
        if(checkBox.checked == false){
            this.style.backgroundColor = '';

            grd.splice(grd.indexOf(this.getAttribute('data-bg')),1);
            if(grd.length == 0){
                button.style.backgroundImage = "linear-gradient(90deg, #5034FF 25.69%, #B4B4FF 100%)";
            }
            else if(grd.length == 1){
                button.style.backgroundColor = grd[0];
                button.style.backgroundImage = '';
            }
            else{
                button.style.backgroundImage = `linear-gradient(90deg, ${grd})`;
            }

        }
    })
})
