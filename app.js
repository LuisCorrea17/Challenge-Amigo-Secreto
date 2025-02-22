// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let textInput = document.querySelector('.input-name');
    if (textInput.value == '') {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(textInput);
        textInput.value = '';
    }
}