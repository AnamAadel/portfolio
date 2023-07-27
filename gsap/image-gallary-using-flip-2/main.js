
const boxImage = gsap.utils.toArray(".boxImage");
const boxes = gsap.utils.toArray(".box");
const gallery = document.querySelector(".gallery");
const filledBox = document.querySelector(".filledBox");

gsap.registerPlugin(Flip);

boxes.forEach((box)=>{
    
    
    box.addEventListener("click",()=>{

        console.log()
        function imageBig(){
            let state = Flip.getState(".boxImage");
            // let state2 = Flip.getState(".child");
            
            if(box.parentElement === gallery){
                filledBox.appendChild(box.children[0]);
                
            }
            
            boxes.forEach((emptyBox)=>{
                if(!emptyBox.children[0]){
                    emptyBox.appendChild(filledBox.children[0]);
                    // filledBox.appendChild(box.children[0]);
                    
                }
            })
            Flip.from(state, {duration: 1,scale: true});

        }
        
        imageBig();
    })
})