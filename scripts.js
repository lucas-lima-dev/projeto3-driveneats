
let dish;
let drink;
let desserts;

function selectDish (seletor) {

    const itemSelected = document.querySelector(".dishes .selected-item");
    const iconSelected = document.querySelector(".dishes .checked:not(.hidden)");

    if (itemSelected !==null && iconSelected !==null) {
        itemSelected.classList.remove("selected-item");
        iconSelected.classList.add("hidden");
    }

    seletor.classList.toggle("selected-item");
    seletor.lastElementChild.classList.toggle("hidden");
}

function selectDrink (seletor) {

    const itemSelected = document.querySelector(".drinks .selected-item");
    const iconSelected = document.querySelector(".drinks .checked:not(.hidden)");

    if (itemSelected !==null && iconSelected !==null) {
        itemSelected.classList.remove("selected-item");
        iconSelected.classList.add("hidden");
    }

    seletor.classList.toggle("selected-item");
    seletor.lastElementChild.classList.toggle("hidden");
}

function selectDessert (seletor) {

    const itemSelected = document.querySelector(".desserts .selected-item");
    const iconSelected = document.querySelector(".desserts .checked:not(.hidden)");

    if (itemSelected !==null && iconSelected !==null) {
        itemSelected.classList.remove("selected-item");
        iconSelected.classList.add("hidden");
    }

    seletor.classList.toggle("selected-item");
    seletor.lastElementChild.classList.toggle("hidden");
}






function finalizarPedido () {
    const mudarbotao = document.querySelector (".finalizarPedido");
    mudarbotao.innerHTML = `Fechar pedido`;
}