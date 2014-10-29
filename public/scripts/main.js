// THIS IS WHERE YOUR JQUERY WILL GO!
$(function() {

	// Handlebars... When page loads, generate the #results-tpl template function, then compile and store as a templateFunction, for later
	var resultsContainer = $('#results-tpl').html();
	var templateFunction = Handlebars.compile(resultsContainer);

	$('#searchButton').on('click', function(e) {
		e.preventDefault();

		console.log("form has been submitted");
		
		// Send the search item from the CLIENT to the BROWSER
		var queryLanguage = {
			searchItem: $('.searchItem').val()
		};

		console.log('Query to send to server: ', queryLanguage);

		// AJAX get request to search, passing the search term data
		// THe value of using GET here is that you are ONLY getting postData from the server, and it is cached - using POST will not cache this AJAX request
		$.get('/search', queryLanguage, function(data) {
			console.log('All Data: ', data);
			console.log('queryLanguage: ', queryLanguage);

			// Handlebars... use your Handlebars templateFunction to render your found data, then append to the div
			var outputHTML = templateFunction(data);
			$('#results').append(outputHTML);
		});

	});


}); // end jQuery
