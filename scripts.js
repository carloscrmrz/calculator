const NUMBERS = document.querySelectorAll('.numbers');
const SCREEN = document.querySelector('.calc-screen');
const OPERATIONS = document.querySelectorAll('.operations');
//const = document.querySelector();
//const = document.querySelector();
//const = document.querySelector();
//const = document.querySelector();
//const = document.querySelector();
//const = document.querySelector();

let storedNumbers;

NUMBERS.forEach(btn => {
	btn.addEventListener('click', () => {
		//parseInt(btn.dataset.val)
		changeScreenText(btn.dataset.val);
		console.log(btn.dataset.val);

	});
});


OPERATIONS.forEach(btn => {
	btn.addEventListener('click', () => {
		//parseInt(btn.dataset.val)
		console.log(btn.dataset.val);

	});
});

function changeScreenText(evt) {
	SCREEN.innerText += evt;
}

