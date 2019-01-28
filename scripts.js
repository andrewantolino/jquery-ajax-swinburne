$(document).ready(function() {
	var post = $.get("https://jsonplaceholder.typicode.com/todos/1", function(data) {
		console.log(data);

		$('#postList').append(`
			<li>${data.id}</li>
			<li>${data.title}</li>
		`);
	});

	
});