handlebars-search-engine
========================

Express/Jade, Handlebars, AJAX, jQuery

Handlebars: Search Engine
Objective
Create a data driven UI using Handlebars

Skills
Creating an Express app
Understanding the relationship between client and server.
Creating Handebars templates
AJAX
jQuery
Resources
handlebarsjs.com
dummy data
Requirements
Part I

Setup an Express server
Define a route that handlers GET requests to "/search".
Save the dummy data and require it in your app.js.
Create a form using Jade that contains a search input for searching programming languages.
Add a div below it with the ID "results".
Create a Handlebars template for your "results" div.
When the page loads, generate the template function using Handlebars.compile. Store the template function in a local variable that can be accessed from the AJAX callback.
When a user submits the form, send the entered search term via AJAX to your "/search" endpoint.
In your "/search" route take the search term that was sent to your server and find the description of that programming language in the dummy data.
Use res.send to send the JSON back to the client.
Do not Send the entire dummy data back to the client. Just send the language that was found from their search!

When you recieve the response from the server, invoke the template function that you created earlier with Handlebars.compile. Take the result (a string of HTML) and append it to your results div using jQuery. Make sure to empty() the div first if you'd like this to work multiple times.
