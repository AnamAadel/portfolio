const menu = document.querySelector(".menu");
const coverItem = document.querySelector(".coverItem"),
items = document.querySelectorAll(".item");


// items.forEach((item)=>{
//     item.addEventListener("mouseover",()=>{
//         if(item.nextElementSibling){
//             item.style.transform = `scale(2)`
//             item.nextElementSibling.style.transform = `scale(1.6)`
//             if(!item.nextElementSibling){
//                 item.style.transform = `scale(2)`
//             }
            
//         }
//         if(item.nextElementSibling.nextElementSibling){
//             item.nextElementSibling.nextElementSibling.style.transform = `scale(1.2)`
//         }
//         if(!item.nextElementSibling.nextElementSibling){
//             item.style.transform = `scale(2)`
//             // item.nextElementSibling.style.transform = `scale(1.6)`

//         }
//         console.log(item.nextElementSibling.nextElementSibling)
//     })
//     item.addEventListener("mouseout",()=>{
//         if(item.nextElementSibling){
//             item.style.transform = `scale(1)`
//             item.nextElementSibling.style.transform = `scale(1)`

//         }
//          if(item.nextElementSibling.nextElementSibling){
//             item.nextElementSibling.nextElementSibling.style.transform = `scale(1)`

//         }
//         if(!item.nextElementSibling && !item.nextElementSibling.nextElementSibling){
//             item.style.transform = `scale(1)`
//             // item.nextElementSibling.style.transform = `scale(1.6)`

//         }
//     })
// })

for(let i =0; i< items.length; i++){
    items[i].addEventListener("mouseover",()=>{
        items[i].style.transform = `scale(2.5)`
        if(items[i].nextElementSibling){
            items[i].nextElementSibling.style.transform = `scale(2)`
            
        }
        if(items[i].nextElementSibling.nextElementSibling){
            items[i].nextElementSibling.nextElementSibling.style.transform = `scale(1.6)`
        }
        if(items[i].previousElementSibling){
            items[i].previousElementSibling.style.transform = `scale(2)`
            
        }
        if(items[i].previousElementSibling.previousElementSibling){
            items[i].previousElementSibling.previousElementSibling.style.transform = `scale(1.6)`
        }


        
    })

    items[i].addEventListener("mouseout",()=>{
        items[i].style.transform = `scale(1)`
                if(items[i].nextElementSibling){
                    items[i].nextElementSibling.style.transform = `scale(1)`
        
                }
                if(items[i].nextElementSibling.nextElementSibling){
                    items[i].nextElementSibling.nextElementSibling.style.transform = `scale(1)`
                }
                if(items[i].previousElementSibling){
                    items[i].previousElementSibling.style.transform = `scale(1)`
                    
                }
                if(items[i].previousElementSibling.previousElementSibling){
                    items[i].previousElementSibling.previousElementSibling.style.transform = `scale(1)`
                }
            })
}

menu.addEventListener("mousemove",function(e){
    console.dir(menu.parentElement)
    coverItem.style.left = `${e.clientX - menu.parentElement.offsetLeft}px`
})