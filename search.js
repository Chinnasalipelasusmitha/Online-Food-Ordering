// Get the search input and button elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Add event listener to search button
searchButton.addEventListener('click', (e) => {
	e.preventDefault();
	const searchTerm = searchInput.value.trim();
	if (searchTerm === '') {
		alert('Please enter a search term');
		return;
	}
	// Send search request to server
	fetch('/search', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			searchTerm
		})
	})
	.then((res) => res.json())
	.then((data) => {
		// Display search results
		const resultsHtml = data.results.map((result) => {
			return `
				<li>
					<a href="${result.url}">${result.name}</a>
					<p>${result.description}</p>
				</li>
			`;
		}).join('');
		searchResults.innerHTML = `
			<ul>
				${resultsHtml}
			</ul>
		`;
	})
	.catch((err) => {
		console.error(err);
	});
});
