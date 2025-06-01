// Get the form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Add event listener to form submit
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = nameInput.value.trim();
	const phone = phoneInput.value.trim();
	const email = emailInput.value.trim();
	const message = messageInput.value.trim();
	// Validate form data
	if (name === '' || phone === '' || email === '' || message === '') {
		alert('Please fill in all fields');
		return;
	}
	// Send contact us request to server
	fetch('/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name,
			phone,
			email,
			message
		})
	})
	.then((res) => res.json())
	.then((data) => {
		// Display success message
		alert('Thank you for contacting us!');
		// Clear form fields
		nameInput.value = '';
		phoneInput.value = '';
		emailInput.value = '';
		messageInput.value = '';
	})
	.catch((err) => {
		console.error(err);
	});
});

