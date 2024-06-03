const bilAmnt = document.getElementById("bill");
const tipPercent = document.getElementById("tip");
const btnEl = document.getElementById("btn");
const totalEl = document.getElementById("total");

function totalAmountCalculation() {
	const bilvalue = bilAmnt.value;
	const tipvalue = tipPercent.value;
	const totalAmt = bilvalue * (1 + tipvalue / 100);
	totalEl.innerText = totalAmt.toFixed(0);
}

btnEl.addEventListener("click", totalAmountCalculation);