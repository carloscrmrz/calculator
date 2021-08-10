const NUMBERS = document.querySelectorAll('.numbers');
const SCREEN = document.querySelector('.calc-screen');
const OPERATIONS = document.querySelectorAll('.operations');
const EQUAL = document.querySelector('.equal');
//const = document.querySelector();
//const = document.querySelector();
//const = document.querySelector();
//const = document.querySelector();
//const = document.querySelector();

let firstOperand = '';
let secondOperand = '';
let memoryOperation = null;
let resetScreen = false;

window.addEventListener('keydown', keyboardLog)

NUMBERS.forEach(btn => {
	btn.addEventListener('click', showOnScreen);
});


OPERATIONS.forEach(btn => {
	btn.addEventListener('click', operationSelect);
});

EQUAL.addEventListener('click', eval);



function showOnScreen(e) {
	if ( SCREEN.innerText === '0' || resetScreen ) clearScreen()

	SCREEN.innerText += e.target.dataset.val; 
}

function clearScreen() {
	SCREEN.innerText = ''
	resetScreen = false;
}

function operationSelect(e) {
	if (memoryOperation !== null) eval()
	memoryOperation = e.target.dataset.val;
	firstOperand = SCREEN.innerText;
	SCREEN.innerText = '';
	
}

function keyboardLog(e) {
	const num = document.querySelector(`.numbers[data-key="${e.keyCode}"]`);
	const numpad = document.querySelector(`.numbers[data-num="${e.keyCode}"]`);

	if ( num === null && numpad === null ) return
	if ( SCREEN.innerText === '0' || resetScreen ) clearScreen()
	
	if ( num !== null ) {
		SCREEN.innerText += num.dataset.val;
	} else {
		SCREEN.innerText += numpad.dataset.val;
	}
}

function eval() {
	if ( memoryOperation === null ||  resetScreen ) return
	if ( memoryOperation == '/' && SCREEN.innerText === '0' ) {
		SCREEN.innerText = 'SYNTAX ERROR';
		memoryOperation = null;
		resetScreen = true;
		return
	}


	secondOperand = SCREEN.innerText;
	SCREEN.innerText = operate(firstOperand, secondOperand, memoryOperation);
	
	firstOperand = '';
	secondOperand = '';

	memoryOperation = null;

}



function operate(a,b,operator) {
	a = Number(a);
	b = Number(b);

	switch (operator) {
		case '+':
			return add(a,b)
		case '-':
			return substract(a,b)
		case '*': 
			return multiply(a,b)
		case '/':
			if (b === 0) return null
			return divide(a,b)
		default:
			return
	}
}

function add(a,b) {
	return a + b
}

function substract(a,b) {
	return a - b
}

function multiply(a,b) {
	return a*b
}

function divide(a,b) {
	return a/b
}


