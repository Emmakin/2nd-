let billEl = document.querySelector("#bill");
let noOfPeopleE1 = document.querySelector("#people");
let tipPercentages = document.querySelectorAll(".cl-tip");
let tipAmountPerPersonEl = document.querySelector("#tip-per-person");
let totalAmountPerPersonEl = document.querySelector("#total-per-person");
let buttonEl = document.querySelector(".press")
let errorMessageE1 = document.querySelector(".displayError")


let billAmount = 0;
let noOfPeople = 0;
let tipPercentage = 0;



errorMessageE1.innerHTML = "";

function displayErrorMessage(){
  if (document.getElementById("bill").value.length >= 0){
    errorMessageE1.innerHTML != "";
  } 
  
}



 buttonEl.addEventListener("click", (e) => {
  blank();
 });



billEl.addEventListener("keyup", (e) => {
  calculateTip();
    billAmount = Number(e.target.value);
    
});

noOfPeopleE1.addEventListener("keyup", (e) => {
    noOfPeople = Number(e.target.value);
    calculateTip();
});

Array.from(tipPercentages).forEach((tipPercentageEl) => {
    tipPercentageEl.addEventListener("click", (e) => {
      if (e.target.innerText.includes("%")) {
        tipPercentage = Number(e.target.innerText.replace("%", ""));
        applyActiveClass(e.target.innerText);
        calculateTip();
      }
      displayErrorMessage();
    });
  });

  function calculateTip() {

    let tipAmount = billAmount * (tipPercentage / 100);
    let totalAmount = billAmount + tipAmount;
    let tipAmountPerPerson = tipAmount / noOfPeople;
    let totalAmountPerPerson = totalAmount / noOfPeople;
    
    updateValues({
        tipAmountPerPerson,
        totalAmountPerPerson,
    }); 
   
  }

function updateValues({ tipAmountPerPerson, totalAmountPerPerson }) {
    tipAmountPerPersonEl.innerText = 
      tipAmountPerPerson == Infinity ? 0 : tipAmountPerPerson.toFixed(2);
    totalAmountPerPersonEl.innerText = 
     totalAmountPerPerson == Infinity ? 0 : totalAmountPerPerson.toFixed(2);
     
  }

  function applyActiveClass(innerTextPect) {
    Array.from(tipPercentages).forEach((tipPercentageEl) => {
      if (tipPercentageEl.innerText == innerTextPect) {
        tipPercentageEl.classList.add("active");
        applyActiveButton();
        displayErrorMessage();
      } else  {
        tipPercentageEl.classList.remove("active");
      }
    });
    }

function applyActiveButton() {
      buttonEl.classList.add("active");
     }

function blank(){
  // preventDefault();
document.querySelector("#tip-per-person").innerText = '$0.00';
document.querySelector("#total-per-person").innerText = '$0.00';
document.getElementById("bill").value = '';
document.getElementById("people").value = '';
Array.from(tipPercentages).forEach((tipPercentageEl) => {
  tipPercentageEl.classList.remove("active");});
  buttonEl.classList.remove("active");
}


  

