// Add a submit event listener to the form
      document.getElementById('search-form').addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();
        // Get the search term from the input field
        var searchTerm = document.getElementById('search-term').value;
        // Clear the results container
        document.getElementById('results').innerHTML = '';
        // Check if the search term is in the dictionary
        if (dictionary[searchTerm]) {
          // If the search term is found, display the definition
          var entry = '<div class="entry">';
          entry += '<div class="term">' + searchTerm + '</div>';
          entry += '<div class="definition">' + dictionary[searchTerm] + '</div>';
          entry += '</div>';
          document.getElementById('results').innerHTML = entry;
        } else {
          // If the search term is not found, display an error message
          document.getElementById('results').innerHTML = '<p>No results found.</p>';
        }
      });