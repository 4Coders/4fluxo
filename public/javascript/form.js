var cl = function() {
	for (var i = arguments.length - 1; i >= 0; i--) {
		console.log(arguments[i]);
	};
}

$(document).ready(function() {
	cl('form');
	var form = new UserForm();
	form.render();

	$('#user_form').on('click', 'a', function() {
		cl('submitting...', $('input[name="name"]').val(), $('input[name="email"]').val());
		var model = new UserModel({user: {'name': $('input[name="name"]').val(), 'email': $('input[name="email"]').val()}})
		$.post('/users', model.toJSON());
	});
});