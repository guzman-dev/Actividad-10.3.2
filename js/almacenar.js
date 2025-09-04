const botonAgregar = document.getElementById("agregar");
const botonLimpiar = document.getElementById("limpiar");
const contenedorLista = document.getElementById("contenedor");
const elemento = document.getElementById("item");

let listaGuardada = JSON.parse(localStorage.getItem("listaElementos")) || [];

document.addEventListener("DOMContentLoaded", () =>{
    listaGuardada = JSON.parse(localStorage.getItem("listaElementos")) || [];
    mostrarLista();
});

botonAgregar.addEventListener("click", agregarElemento);

botonLimpiar.addEventListener("click", ()=>{
    contenedorLista.innerHTML = '';
    listaGuardada.length = 0;
    localStorage.setItem("listaElementos", JSON.stringify(listaGuardada));
    mostrarLista();
});

function mostrarLista(){
    contenedorLista.innerHTML = "";
    for (let i = 0; i < listaGuardada.length; i++) {
        const elementoActual = listaGuardada[i];
        let elementoDeLista = document.createElement("li");
        elementoDeLista.innerHTML = elementoActual;
        contenedorLista.append(elementoDeLista);
    }
}

function agregarElemento(){
    console.log("clicked");
    contenedorLista.innerHTML = '';
    const input = elemento.value.trim();
    listaGuardada.push(input);
    console.log(listaGuardada);
    localStorage.setItem("listaElementos", JSON.stringify(listaGuardada));
    elemento.value= "";
    mostrarLista();
    input.value = '';
}