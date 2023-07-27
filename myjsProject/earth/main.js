const earth = document.querySelector(".earth"),
gallaxy = document.querySelector(".gallaxy");

let isMoving = false;
let movingVlue = 0;

function movingEarth(e){

    if(!isMoving) return;

    movingVlue += e.movementX;

    earth.style.backgroundPositionX = `${movingVlue + 225}px`;
    gallaxy.style.backgroundPositionX = `${-movingVlue - 250}px`;
    
}

function movingStop(){
    isMoving = false
}



gallaxy.addEventListener("mousedown",()=> {
    isMoving = true;
    gallaxy.classList.add("grabbing");
});
gallaxy.addEventListener("mouseup",()=>{
    gallaxy.classList.remove("grabbing");
    movingStop();

});
gallaxy.addEventListener("mousemove",movingEarth);



