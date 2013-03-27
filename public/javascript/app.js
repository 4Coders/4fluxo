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

	var model = new UserModel();
	model.set('name', 'Rafael Pereira');

	var model2 = new UserModel();
	model2.set('name', 'Pereira');

	App.view.collection.add([model, model2]);
});