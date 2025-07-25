function doSearch() {
	/* write your search code inside this function */
	var searchInputField = document.getElementById('ontario-search-input-field');
	console.log('search input field:', searchInputField.value);
}

function handleSearch() {
	console.log('Searching...');
}

function addSearchResetOnClickListener(searchResetButtonId, searchInputId) {
	document.getElementById(searchResetButtonId).addEventListener('click', () => {
		document.getElementById(searchInputId).focus();
	});
}

addSearchResetOnClickListener('search-example-1-reset-button', 'search-example-1');
addSearchResetOnClickListener('search-example-2-reset-button', 'search-example-2');
