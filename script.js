const txtBox = document.querySelector(".txtBox");
const form = document.querySelector(".searchForm");
const searchWord = document.querySelector(".search-word");
const description = document.querySelector(".description");
const dictionaryJson = "dictionary.json";

function searchDict(e) {
	e.preventDefault();
	fetch(dictionaryJson)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			e.preventDefault;
			let word = txtBox.value;
			console.log(txtBox.value);
			let searchKeyword = word.toUpperCase();
			if (data[searchKeyword]) {
				searchWord.innerHTML = searchKeyword;
				description.innerHTML = data[searchKeyword];
			} else {
				searchWord.innerHTML = "Not found";
				description.innerHTML = "Sorry, the word you are looking for was not found in our dictionary.";
			}
		});
}

form.addEventListener("submit", searchDict);
