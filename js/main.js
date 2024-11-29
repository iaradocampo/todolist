const input = document.querySelector(".input");
const botonAgregar = document.querySelector(".boton-agregar");
const container = document.querySelector(".container");

class Item {
    constructor(tarea) {
        this.tarea = tarea;
        this.crearDiv(tarea);
    }
    crearDiv(tarea){
        const inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = tarea;
        const item = document.createElement("div");
        item.classList.add("item");
        const botonEditar = document.createElement("button");
        botonEditar.innerHTML = `<i class="fa-solid fa-lock">`
        botonEditar.classList.add("boton-editar");
        const botonRemover = document.createElement("button");
        botonRemover.innerHTML = `<i class="fa-solid fa-trash">`
        botonRemover.classList.add("boton-remover");
        item.appendChild(inputItem);
        item.appendChild(botonEditar);
        item.appendChild(botonRemover);
        container.appendChild(item);
        this.botones(inputItem, item, botonEditar, botonRemover);
    }
    botones(inputItem, item, botonEditar, botonRemover){
        botonEditar.addEventListener("click", () => {
            inputItem.disabled = !inputItem.disabled;
            botonEditar.innerHTML = inputItem.disabled
            ? `<i class="fa-solid fa-lock">`
            : `<i class="fa-solid fa-lock-open"></i>`
        });
        botonRemover.addEventListener("click", () => {
            container.removeChild(item);
        })
    }
}

function chequearInput(){
    if (input.value.trim() !== "") {
        new Item(input.value);
        input.value = "";
    }
}

botonAgregar.addEventListener("click", chequearInput);