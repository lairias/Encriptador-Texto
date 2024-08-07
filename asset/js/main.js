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
const Llaves_encriptacion = {
    "e" : 'enter',
    "i" : 'imes',
    "a" : 'ai',
    "o" : 'ober',
    "u" : 'ufat'
}
const ClickEncriptar = document.querySelector("#SentEncritar");
const ClickDesencriptar = document.querySelector("#SentDesencriptar");
const $BoxImagen = document.querySelector("#Box-img")
let $CopiarBTNDesencriptado = document.getElementById('CopiarDesencriptado')
let $textareaDesencriptado = document.getElementById('areaDesencriptador')
let $textareaEncriptado = document.querySelector("#areaEncriptador");

// var textarea = document.getElementById("miTextarea");
// var texto = textarea.value;



///-------------------------------------------------------LOGÍCA
//Ejecutando la funcion de Encriptado
ClickEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    if(ValidacionesDeTexto($textareaEncriptado.value)){
        let TextoEncriptado = Encriptacion($textareaEncriptado.value,Llaves_encriptacion )
        $BoxImagen.classList.add('ocultar');
        $CopiarBTNDesencriptado.classList.remove('ocultar');
        $textareaDesencriptado.value = TextoEncriptado;
        $textareaEncriptado.value = ''
    }
    
});

//Ejecutando la funcion de Desencriptar
ClickDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    if(ValidacionesDeTexto($textareaEncriptado.value)){
    let TextoEncriptado = Desencriptar($textareaEncriptado.value,Llaves_encriptacion )
    $textareaDesencriptado.value = TextoEncriptado
    $textareaEncriptado.value = ''
    }
});

//--Ejecutando la funcion COPIAR
$CopiarBTNDesencriptado.addEventListener('click',(e)=>{
    e.preventDefault();
    navigator.clipboard.writeText($textareaDesencriptado.value).then(function () {
        alert("Texto copiado al portapapeles!");
        $textareaDesencriptado.value =''
    }).catch(function (error) {
        console.error("Error al copiar el texto: ", error);
    });
    })




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

//--FUNCION DE VALIDACIONES DE TEXTO
const  ValidacionesDeTexto= (texto)=>{
    var regex = /^[a-z\s]+$/;
    if (!regex.test(texto)) {
        alert("El texto solo puede contener letras minúsculas sin acentos ni caracteres especiales.");
        return 0;
    }
    
}




