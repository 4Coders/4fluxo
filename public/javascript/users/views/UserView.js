var UserView = Backbone.View.extend({
	tagName: 'li',
	className: 'user',
	render: function(){
		this.$el.text(this.model.get('name'));

		return this;
	}
});