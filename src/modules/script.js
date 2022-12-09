const resultAmount = document.querySelector('.amount');
const totalSum = document.querySelector('.total');
const checkSum = document.querySelector(".payment__input");
		checkSum.addEventListener("input", addTotal);
const people = document.querySelector(".people__input");
		people.addEventListener("focusin", checkPercent);
const percentage = document.getElementById('Custom');
		percentage.addEventListener('input', createsPercentage);
const allTips = document.querySelectorAll('.tips__item');
		allTips.forEach(element => {element.addEventListener('click', addToAmount);});
const btnReset = document.getElementById('btnReset');
		btnReset.addEventListener('click', removeAll);
		


function addToAmount() {
	this.classList.toggle("tipsopen");
	this.addEventListener('focusout', () => this.classList.remove("tipsopen"));
	allTips.forEach(element => {
		if (element.classList.contains('tipsopen')){
		}else{
			element.classList.remove("tipsopen");
		}
	});
	addingTotal(this);
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
		if(this.value > 100){
			this.value = '100';
		};
		addingTotal(this);
}

function checkPercent() {
	const peopple = Number(this.value);
	const checkSumm = Number(checkSum.value);
	const SumAmount = Number(resultAmount.innerText);
	const total = Number(totalSum.innerText);
	const percent = ((total * peopple) - checkSumm) / (checkSumm / 100);
		people.addEventListener('input', addingPeopleTotal);
			return percent, total, SumAmount, checkSumm;

	function addingPeopleTotal() {
		maxLengthCheck(people);
		const title = document.querySelector('.title__err');
		people.addEventListener('focusout', () => {
			if (people.value === "" || people.value === "0"){
			removeAll();
			}
			title.classList.remove('err');
			this.classList.remove('peopIn');
			})
		if (people.value === "" || people.value === "0"){
			title.innerText = `Can't be zero`;
			title.classList.add('err');
			this.classList.add('peopIn');
		}else{
			title.textContent = "";
			title.classList.remove('err');
			this.classList.remove('peopIn');
			if (checkSum.value !== "" & people.value !== ""){
				const peopple = Number(this.value);
					resultAmount.innerText = (Math.ceil(percent) / peopple).toFixed(2); // push Tip Amount 
					totalSum.innerText = ((checkSumm + percent)  / peopple).toFixed(2); // push Total 
				}
			}

		}
	}

function addingTotal(val) {
	const checkSumm = Number(checkSum.value);
	const peoplee = Number(people.value);
	const total = checkSum.value / 100 * val.value;
	const summ = (checkSumm + total) / peoplee;
	const amount = total / people.value;
		resultAmount.innerText = amount.toFixed(2); // push Tip Amount 
		totalSum.innerText = summ.toFixed(2); // push Total 
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

