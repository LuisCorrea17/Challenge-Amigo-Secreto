# CHALLENGE AMIGO SECRETO

Este proyecto es parte del programa Oracle Next Education, un challenge cuyo proposito es practicar logica de programacion.

En este proyecto se desarrolaron 3 funciones, siendo estas:

#### agregarAmigo

En esta funcion se agrega la logica para añandir nombres a la lista de amigos sobre la cual se hara el sorteo, utilizando el metodo querySelector para obtener el contenido del elemento input y añadirlo a una estructura array.

``` javascript
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
```

#### listaAmigos

En esta funcion añadimos la funcionalidad de mostrar los nombres que van siendo añadidos a lista en la pantalla, para que el usuario pueda visualizarlos. Esto usando nuevamente el metodo querySelector para obtener el elemento ul y usando el forEach se va creando un elemento li por cada nombre que hay en el array.

``` javascript
    function listaAmigos() {
        let lista = document.querySelector(".name-list");
        lista.innerHTML = '';
        amigos.forEach((amigo) => {
            let li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }
```

#### sortearAmigo

Siendo esta la funcionalidad principal de la pagina web, usando el metodo random para generar un numero aleatorio que sera usado como indice para seleccionar un elemento del array que contiene los nombres de los amigos. Posteriormente usando querySelector mostramos el nombre del elemento sorteado en pantalla.

``` javascript
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
```
