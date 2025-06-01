// Add event listener to help button
document.getElementById('open-help').addEventListener('click', (e) => {
	e.preventDefault();
	const helpContent = document.getElementById('help-content');
	helpContent.style.display = helpContent.style.display === 'block' ? 'none' : 'block';
});

