// THIS IS WHERE YOUR JQUERY WILL GO!
$(function() {

	// When page loads, generate the #results-tpl template function
	var resultsContainer = $('#results-tpl').html();
	var templateFunction = Handlebars.compile(resultsContainer);

	$('#searchButton').on('click', function(e) {
		e.preventDefault();

		console.log("form has been submitted");
		// Capture the searchQuery 
		var postData = {
			searchItem: $('.searchItem').val()
		};

		console.log(postData);

		// AJAX post request to search, passing the search term data
		$.post('/search', postData, function(description) {
			console.log('Description: ', description);
			console.log('Postdata: ', postData);

			var outputHTML = templateFunction(description);
			$('#results').append(outputHTML);
		});

	});


}); // end jQuery
