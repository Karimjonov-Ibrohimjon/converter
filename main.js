let elForm = document.querySelector(".form")
let elInput = document.querySelector(".form__input")
let elSelect = document.querySelector(".form__select")
let elText = document.querySelector(".text")


elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    let inputValue = +elInput.value;
    let selectValue = +elSelect.value;
    let totalValue = inputValue / selectValue;


    if(selectValue == 12200) {
        elText.textContent = `$ ${totalValue.toFixed(1)}`
    } else if (selectValue == 13000) {
        elText.textContent = `€ ${totalValue.toFixed(1)}`
    } else if (selectValue == 127) {
        elText.textContent = `₽ ${totalValue.toFixed(1)}`
    }
})

