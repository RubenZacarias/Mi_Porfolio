//mi primer menu hamburguesa//
const botonmenu = document.querySelector(".boton-menu")
const items = document.querySelector(".items")

botonmenu.addEventListener("click", () =>{
    items.classList.toggle("items_visible");
});

//mi primer modo oscuro//

let btnNoche= document.querySelector(".noche");
let body= document.querySelector("body");

btnNoche.addEventListener("click", ()=>{
    body.classList.toggle("nocturno");
});