var cl = function() {
	for (var i = arguments.length - 1; i >= 0; i--) {
		console.log(arguments[i]);
	};
}

$(document).ready(function() {
	var form = new UserForm();
	form.render();

	$('#user_form').on('click', 'a', function() {
		var model = new UserModel({user: {'name': $('input[name="name"]').val(), 'email': $('input[name="email"]').val()}})
		$.post(
			'/users', 
			model.toJSON(),
			function() {
				$('#flash-message').html("FEITOOOOO!").fadeIn();
			}
		);
	});
});