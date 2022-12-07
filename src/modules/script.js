const resultAmount = document.querySelector('.amount');
const totalSum = document.querySelector('.total');
const checkSum = document.querySelector(".payment__input");
		checkSum.addEventListener("input", addTotal);
const people = document.querySelector(".people__input");
		people.addEventListener("input", addingPeopleTotal);
const percentage = document.getElementById('Custom');
		percentage.addEventListener('input', createsPercentage);
const allTips = document.querySelectorAll('.tips__item');
		allTips.forEach(element => {element.addEventListener('click', addToAmount);});
const btnReset = document.getElementById('btnReset');
		btnReset.addEventListener('click', removeAll);


function addToAmount(result) {
	const total = totalSum.innerText / 100 * this.value;
	const amount = Number(total / people.value);
	const Bill = Number(checkSum.value);
	if (result){
		console.log('sya tut');
	}else{
		resultAmount.innerText = amount.toFixed(2);
		console.log(this.value);
		console.log(totalSum.innerText);
		totalSum.innerText = (amount + Bill).toFixed(2);
	}
}

function addTotal() {
		maxLengthCheck(this);
	const sum = checkSum.value;
	const result = (this.value / people.value).toFixed(2);
			totalSum.innerText = result;
		defaultBtnReset();
if (sum === ""){
	totalSum.innerText = '0.00';
	resultAmount.innerText = '0.00';
}
}

function createsPercentage() {
	maxLengthCheck(this);
		const percent = this.value;
		const total = totalSum.innerText / 100 * this.value;
		const result = Number(total / people.value);
		console.log(result);
if(percent > 100){
	this.value = '100';
};
	addToAmount(result);
		// 	resultAmount.innerText = result.toFixed(2);
}

function addingPeopleTotal() {
	maxLengthCheck(this);
		people.addEventListener("focusout", () =>  {
			if (people.value === ""){
				people.value = "1";
			}
		});
	if(checkSum.value !== "" & people.value !== ""){
		const result = (checkSum.value / people.value).toFixed(2);
		totalSum.innerText = result;
	}
}

function removeAll() {
	totalSum.innerText = '0.00';
	resultAmount.innerText = '0.00';
	checkSum.value = "";
	people.value = "1";
	percentage.value = "";
defaultBtnReset();
}

function maxLengthCheck(object){
  if (object.value.length > object.maxLength)
	 object.value = object.value.slice(0, object.maxLength)
}
function defaultBtnReset() {
	if (totalSum.innerText === "0.00" || checkSum.value === ""){
	btnReset.style.cssText = `
		opacity: 0.2;
		`;
	}else {
		btnReset.style.cssText = `
		opacity: 1;
		`;
	}
}