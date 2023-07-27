const tap_box = document.querySelector('.tap_box');
const icon = document.querySelectorAll('.icon');

let isDragging = false;

const handleIcons = ()=>{
    let scrollVal = Math.floor(tap_box.scrollLeft);
    let scrollWidht = tap_box.scrollWidth - tap_box.clientWidth;
    icon[0].style.display = scrollVal > 0 ? "flex" : "none";
    icon[1].style.display = scrollWidht > scrollVal ? "flex" : "none";
}

icon.forEach(icon =>{
    icon.addEventListener('click',()=>{

        tap_box.scrollLeft += icon.id === "left" ? -350 : 350;

        setTimeout(()=> handleIcons(), 50)
    })
})
const dragging = (e)=>{
    if(!isDragging) return;
    tap_box.scrollLeft -= e.movementX;

    tap_box.classList.add("dragging");
    handleIcons();
}

const dragStop = ()=>{
    tap_box.classList.remove("dragging");
    isDragging = false;
}

tap_box.addEventListener("mousedown",()=> isDragging = true);
tap_box.addEventListener("mousemove",dragging);
tap_box.addEventListener("mouseup",dragStop);
tap_box.addEventListener("mouseleave",dragStop);