// const letters = 'abcdefjhijkmlnopqrstuvwxyz';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let interval = null;
const $span = document.querySelector(".texto-style-hack")
document.addEventListener('DOMContentLoaded',(e)=>{
    let iteration = 0;
      clearInterval(interval);
    
      interval = setInterval(() => {
        $span.innerText = $span.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return $span.dataset.value[index];
            }
    
            return letters[Math.floor(Math.random() * 22)];
          })
          .join("");
    
        if (iteration >= $span.dataset.value.length) {
          clearInterval(interval);
        }
    
        iteration += 1 / 3;
      }, 50);
    
})

//Evento que esperara la carga completa del DOM
document.addEventListener('DOMContentLoaded',(e)=>{
    const $h1 = document.querySelector('#texto-encriptado1')
    const $text = $h1.textContent
    
    //funcion que obtenga un caracter
    const GetRandomChar=()=>{
    const chars = '!@#$%^&*()_+{}|:"<>?`~';
    return chars.charAt(Math.floor(Math.random() * chars.length ))
}

//funcion que obtenga una lista de array de indices
const GetRandomIndices = (length,coun)=>{
    const indices = new Set();
    while(indices.size < coun){

        indices.add( Math.floor(Math.random() * length ))
    }
    return Array.from(indices)
}


//funcion que cambie la posion de la letra por el caracter

const ModificarTexto = (texto)=>{
    const textoModificado = texto.split('')
    const modificadorIndices = GetRandomIndices(textoModificado.length , 4);
    modificadorIndices.forEach(indice =>{
        textoModificado[indice] = GetRandomChar();
    })
    return textoModificado.join("")
}

setInterval(()=>{
    $h1.textContent = ModificarTexto($text)
},800)
})



