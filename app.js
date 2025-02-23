// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let textInput = document.querySelector('.input-name');
    if (textInput.value == '') {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(textInput.value);
        textInput.value = '';
        listaAmigos();
    }
}

function listaAmigos() {
    let lista = document.querySelector(".name-list");
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let listaResultado = document.querySelector(".result-list");
    if (listaResultado.hasChildNodes() == true) {
        listaResultado.innerHTML = '';
    }
    if(amigos.length == 0){
        alert("Debe ingresar nombres a la lista de amigos");
    } else {
        listaResultado = document.querySelector(".result-list");
        let li = document.createElement("li");
        li.textContent = amigos[indiceAleatorio];
        listaResultado.appendChild(li);
    }
}