/* Descripción
¡Bienvenidas y bienvenidos a nuestro primer desafío!

Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

La texto[i] "e" es convertida para "enter"
La texto[i] "i" es convertida para "imes"
La texto[i] "a" es convertida para "ai"
La texto[i] "o" es convertida para "ober"
La texto[i] "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con texto[i]s minúsculas
No deben ser utilizados texto[i]s con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
Por fin, en la columna Concluido estarán los elementos ya concluidos.
El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

Buen proyecto!*/




///-------------------------------------------------------VARIABLES


//Variables Globales que después modificaremos con el DOM
const ArrayTexto = "hola mundo";
const ArrayTextoEncriptado = "hoberlai mufatndober";
const Llaves_encriptacion = {
    "e" : 'enter',
    "i" : 'imes',
    "a" : 'ai',
    "o" : 'ober',
    "u" : 'ufat'
}
///-------------------------------------------------------FUNCIONES
///--FUNCIONES ENCRIPTADO

const Encriptacion = (texto,parametros)=>{
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        if (parametros[texto[i]]) {
            textoEncriptado += parametros[texto[i]];
        } else {
            textoEncriptado += texto[i];
        }
    }
    return textoEncriptado;
}

///--FUNCIONES DESENCRIPTADO
const Desencriptar = (texto,parametros)=>{
    let textoDesencriptado = texto;
    const patrones = Object.values(parametros).join('|');
    const regex = new RegExp(patrones, 'g');

    textoDesencriptado = textoDesencriptado.replace(regex, (coincidencia) => {
        for (let key in parametros) {
            if (parametros[key] === coincidencia) {
                return key;
            }
        }
    });

    return textoDesencriptado;
}

/* METODO DE TEXTO EN HACK*/


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


// const letters = 'abcdefjhijkmlnopqrstuvwxyz';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let interval = null;
const $span = document.querySelector(".texto-style-hack")
console.log($span.dataset.value)
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





