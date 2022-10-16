
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

    dish = seletor;

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

    drink = seletor;

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

    dessert = seletor;

    enableFinish();
}

function calculateTotalOrder(){
    let priceDish = dish.querySelector(".preco").innerHTML;
    priceDish = Number(priceDish.slice(3).replace(",","."));

    
    let priceDrink = drink.querySelector(".preco").innerHTML;
    priceDrink = Number(priceDrink.slice(3).replace(",","."));

    let priceDessert = dessert.querySelector(".preco").innerHTML;
    priceDessert = Number(priceDessert.slice(3).replace(",","."));

    let total = priceDish + priceDrink + priceDessert;

    
    return total.toFixed(2).replace(".",",");

}

function placeOrder () {
    let dishSelected = dish.querySelector("h3").innerHTML;
    let drinkSelected = drink.querySelector("h3").innerHTML;
    let dessertSelected = dessert.querySelector("h3").innerHTML;
    let totalOrder = calculateTotalOrder();
    
    let order = `Olá, gostaria de fazer o pedido:
    - Prato: ${dishSelected}
    - Bebida: ${drinkSelected}
    - Sobremesa: ${dessertSelected}
    Total: R$ ${totalOrder}`

    let finalMensage = encodeURIComponent(order);

    window.location.assign(`https://wa.me/5584981850706?text=${finalMensage}`);
    
}

function enableFinish () {

    if (dish !== undefined && drink !== undefined && dessert !== undefined){
        const CheckoutButon = document.querySelector(".bottom-tab .finishButton .finishText");
        const selected = document.querySelector(".boxFinish");
        selected.classList.add("finish");
        CheckoutButon.innerHTML = `Fechar pedido`;

        CheckoutButon.addEventListener("click",placeOrder)
    }
}
    
