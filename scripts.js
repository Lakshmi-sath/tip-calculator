let billAmt = document.getElementById("billAmount");
let tipPercent = document.getElementById("tipPercent");
let btnClick = document.getElementById("btn");
let totalAmt = document.getElementById("total");

function totalAmtCalculation() {
  const billValue = billAmt.value;
  const tipValue = tipPercent.value;
  const finalBill = billValue * (1 + tipValue/100);
  totalAmt.innerText = finalBill.toFixed(0);
}

btnClick.addEventListener("click", totalAmtCalculation);