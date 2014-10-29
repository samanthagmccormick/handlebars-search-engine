// CLIENT VIEW CONTROLLER
var dummyData = require('../models/dummy-data.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	search: function(req, res) {

		// Get the search query from the client (we named it searchItem: )
		var searchQuery = req.query.searchItem;
		console.log('searchQuery: ', searchQuery);

		// look thru data for matches
		var description;
		for (var language in dummyData.programming) {
			if(searchQuery === language) {
				description = dummyData.programming[language].desc;
			}
		}

		// send the matched language/description pair back to the client
		res.send({lang: searchQuery, desc: description});
	}
};

module.exports = indexController;
