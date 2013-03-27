var cl = function() {
	for (var i = arguments.length - 1; i >= 0; i--) {
		console.log(arguments[i]);
	};
}

var App = {
	model: new UserModel(),
	view: new UsersView({collection: new UserCollection([])}),

	start: function() {
		cl('App::start');
		this.view.render().$el.appendTo('.usersView');
	}
}

$(document).ready(function() {
	cl('ready');
	App.start();

	var models = [],
		user = null;

	$.get('/users.json', function(data) {
		data.forEach(function(item) {
			if(item.name && item.email) {
				user = item.user
				models.push(new UserModel({name: item.name, email: item.email}));
			}
		});
		App.view.collection.add(models);
	});
});