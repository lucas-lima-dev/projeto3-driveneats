
let dish;
let drink;
let dessert;

function selectDish (seletor) {

    dish = document.querySelector(".dishes .selected-item");
    const iconSelected = document.querySelector(".dishes .checked:not(.hidden)");

    if (dish !==null && iconSelected !==null) {
        dish.classList.remove("selected-item");
        iconSelected.classList.add("hidden");
    }

    seletor.classList.toggle("selected-item");
    seletor.lastElementChild.classList.toggle("hidden");

    enableFinish();
}

function selectDrink (seletor) {

    drink = document.querySelector(".drinks .selected-item");
    const iconSelected = document.querySelector(".drinks .checked:not(.hidden)");

    if (drink !==null && iconSelected !==null) {
        drink.classList.remove("selected-item");
        iconSelected.classList.add("hidden");
    }

    seletor.classList.toggle("selected-item");
    seletor.lastElementChild.classList.toggle("hidden");

    enableFinish();
}

function selectDessert (seletor) {

    dessert = document.querySelector(".desserts .selected-item");
    const iconSelected = document.querySelector(".desserts .checked:not(.hidden)");

    if (dessert !==null && iconSelected !==null) {
        dessert.classList.remove("selected-item");
        iconSelected.classList.add("hidden");
    }

    seletor.classList.toggle("selected-item");
    seletor.lastElementChild.classList.toggle("hidden");

    enableFinish();
}

function enableFinish () {

    if (dish !== undefined && drink !== undefined && dessert !== undefined){
        const CheckoutButon = document.querySelector(".bottom-tab .finishButton .finishText");
        const selected = document.querySelector(".boxFinish");
        selected.classList.add("finish");
        CheckoutButon.innerHTML = `Fechar pedido`;
    }
}
    
