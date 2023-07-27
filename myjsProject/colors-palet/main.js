const refresh = document.querySelector('.refresh');
const color_palettes = document.querySelector('.color_palettes');

const numPalette = 32;

const generateColors = ()=>{
    color_palettes.innerHTML = "";
    for(var i=0; i<= numPalette; i++){
        const colorHex = Math.floor(Math.random()* 0xffffff).toString(16);
        let palette = document.createElement('li');

        palette.innerHTML = `<div class="palette" style="background: #${colorHex};"><span class="copy">Copy</span></div>
        <span class="color_text">#${colorHex}</span>`;
        color_palettes.appendChild(palette);

        palette.addEventListener('click',function(){
            let colorText = palette.querySelector('.color_text')
            let copyText = palette.querySelector('.copy')
            navigator.clipboard.writeText(colorText.innerText);

            copyText.innerText = "Copyed";

        })
        palette.addEventListener('mouseleave',function(){
            let copyText = palette.querySelector('.copy')


            setTimeout(()=>copyText.innerText = "Copy",300)
        })

    }
}

generateColors();

refresh.addEventListener('click',generateColors);