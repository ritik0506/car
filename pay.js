document.querySelector('#payment-form').addEventListener('submit', function(e) {
	e.preventDefault();
	let name = document.querySelector('#name').value;
	let cardNumber = document.querySelector('#card-number').value;
	let expiryDate = document.querySelector('#expiry-date').value;
	let cvv = document.querySelector('#cvv').value;
	if (name && cardNumber && expiryDate && cvv) {
		// send payment details to server
		console.log(`Name: ${name}, Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}`);
		// reset form fields
		document.querySelector('#payment-form').reset();
	} else {
		alert('Please fill in all the required fields.');
	}
});