$(document).ready(function() {
	var post = $.get("https://jsonplaceholder.typicode.com/todos/1", function(data) {
		console.log(data);

		// ES6 template string - uses `` and ${} syntax for variables

		$('#postList').append(`
			<li>${data.id}</li>
			<li>${data.title}</li>
		`);

		// Equivalent using string concatenation:
		// .append('<li>' + data.id + '</li><li>' + data.title + '</li>');

		});

	/* Note: the resource will not be really created on the server but it will be faked as if. */
	// Create a resource by consuming an API
	// Supply data that the API requires, as laid out in API reference documentation: https://github.com/typicode/jsonplaceholder#creating-a-resource

	var request = $.post("https://jsonplaceholder.typicode.com/posts", 
		{
			title: "Favorite Food", 
			body: "Peking Duck",
			userId: "12",
		}, 
		function(data) {
			console.log(data)
		}
	);

	// Get the resource you just created by consuming the same API with a different request type and endpoint

	var food = $.get("https://jsonplaceholder.typicode.com/posts/100", function(data) {
		console.log(data)
	});

	// Create a button that gets a list of new posts from the jsonplaceholder API and replaces the initial list (#postList)


	// Find a public API that you can pull data from and render it on the page. Consider pulling images from an API or other rich media
	$.get();
		
});