
const openShopping = document.querySelector(".openShopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector("list");
const listCard = document.querySelector("listCard");
const total = document.querySelector("total");
const body = document.querySelector("body");
const quantity = document.querySelector("quantity");

openShopping.addEventListener("click", ()=>{
    body.classList.add("active")
})
closeShopping.addEventListener("click", ()=>{
    body.classList.remove("active")
})

let peoducts


