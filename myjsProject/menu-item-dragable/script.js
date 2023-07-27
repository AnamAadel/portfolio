const menu = document.querySelector(".menu");
const coverItem = document.querySelector(".coverItem"),
item = document.querySelectorAll(".item");


let isDragging = false;


item.forEach((item)=>{
    item.addEventListener("mousedown", function(elem){
        item.classList.add("dragging");
        
        const draggedItem = menu.querySelector(".dragging");
        isDragging = true
        menu.addEventListener("mousemove", (e)=>{
            
            if(isDragging){
                coverItem.style.zIndex = 9999
                // draggedItem.style.top = `50%`
                // draggedItem.style.transform = `translate(-50%,-50%)`
                draggedItem.style.left = `${e.offsetX - 30}px`
                
                // 
                let siblings = [...menu.querySelectorAll("li .item:not(.dragging)")];

                

                let nextSibling = siblings.find((sibling)=> {
                                        return draggedItem.offsetLeft <= sibling.offsetLeft ;
                })
                menu.insertBefore(draggedItem.parentElement, nextSibling.parentElement)
                // nextSibling.parentElement.style.border = `10px solid #fff`
                

            }
        })


        menu.addEventListener("mouseup", function(elem){
            siblings = null;
    
            item.classList.remove("dragging");
            isDragging = false
            if(!isDragging){
                draggedItem.removeAttribute("style","transform")
                coverItem.style.zIndex = -1
            }
        });
    });


})