const box = document.querySelector(".box");
const img_box = document.querySelector(".img_box");
const items = document.querySelectorAll(".item");

box.addEventListener("mousemove",(e)=> {
    console.log(e.offsetX);

    img_box.style.left = `${e.offsetX}px`
    img_box.style.backgroundPosition = `${-e.offsetX * 1.7 + 30}px ${-e.offsetY * 1.7 + 30}px`
    img_box.style.top = `${e.offsetY}px`
})

items.forEach((item)=> {
    item.addEventListener("click",()=>{
        item.classList.add("active");

        box.children[0].src = item.children[0].src;
        img_box.style.backgroundImage = `url(${item.children[0].src})`

        // item.classList.contains("active") ?  document.querySelectorAll(".imgList .item.active").classList.remove("active") :
       const activeItem = document.querySelectorAll(".imgList .item.active");
    //    activeItem[0].classList.remove("active");

        if(box.children[0].src === item.children[0].src){
            item.classList.add("active");
        }
        activeItem.forEach((acItem)=>{
            acItem.children[0].src !== box.children[0].src && acItem.classList.remove("active")
        })

    })
})