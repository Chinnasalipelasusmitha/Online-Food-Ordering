// Add event listener to social media links
document.querySelectorAll('.about-container ul li a').forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		// Open social media page in new tab
		window.open(link.href, '_blank');
	});
});
