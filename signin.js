// Add event listener to form submit
document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;
	// Validate username and password
	if (username === '' || password === '') {
		alert('Please enter both username and password');
		return;
	}
	// Send signin request to server
	fetch('/signin', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username,
			password
		})
	})
	.then((res) => res.json())
	.then((data) => {
		if (data.success) {
			// Signin successful, redirect to home page
			window.location.href = 'home.html';
		} else {
			// Signin failed, display error message
			alert(data.message);
		}
	})
	.catch((err) => {
		console.error(err);
	});
});
