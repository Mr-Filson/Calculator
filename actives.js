function appendDisplay(value) {
	document.getElementById('display').value += value;
}

function clearDisplay() { 
	document.getElementById('display').value = "";
}

function resultat() {
	const display = document.getElementById('display');
	try {
	display.value = eval(display.value); } catch (error) {
		display.value = 'ОШИБКАААААААА';
	}
}