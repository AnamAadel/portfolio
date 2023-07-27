const rightStack= ["Apple", "Banana", "Apricot", "Papaya", "Peach", "RoseApple", "Pomegranate", ]
const leftStack = ["Raspberries", "Strawberries", "Starfruit", "Tangerine", "Watermelon", "Sapota", "Pineapple",]

const right_stackList = document.querySelector(".right_stack");
const left_stackList = document.querySelector(".left_stack");
const valueChange = document.querySelector(".valueChange");
const valueBack = document.querySelector(".valueBack");
const passBoth = document.querySelector(".passBoth");

let sliceLastChild;
let slicefirstChild;



function passingRight(){
    slicefirstChild = leftStack.shift();
    rightStack.unshift(slicefirstChild)
    showItem()
    console.log(rightStack.length - rightStack.length)
    right_stackList.classList.add("active");
    setTimeout(()=> right_stackList.classList.remove("active"), 200)
}

function passingLeft(){
    sliceLastChild = rightStack.pop();
    leftStack.push(sliceLastChild)
    showItem()
    left_stackList.classList.add("active");
    setTimeout(()=> left_stackList.classList.remove("active"), 200)
}

function showItem(){
    right_stackList.innerHTML = rightStack.map((item)=> {
       return `<li><img src="images/${item}.jpeg" /></li>`
    }).join("")
    
    
    left_stackList.innerHTML = leftStack.map((item)=> {
       return `<li><img src="images/${item}.jpeg" /></li>`
    }).join("")

}
showItem()

valueChange.addEventListener("click",passingLeft)
valueBack.addEventListener("click",passingRight)
passBoth.addEventListener("click",()=> {
    passingLeft();
    passingRight();
})