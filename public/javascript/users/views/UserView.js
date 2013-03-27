var UserView = Backbone.View.extend({
	tagName: 	'li',
	className: 	'user',
	render: function() {
		this.$el.text(this.model.get('name'));
		this.$el.text(this.model.get('name')).appendTo('ul.users:first');
		return this;
	}
});