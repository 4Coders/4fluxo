var UserForm = Backbone.View.extend({
	template: _.template('<form"><fieldset><label for="name">Name:&nbsp;</label><input type="text" name="name" class="span6 text_field" /><label for="name">Email:&nbsp;</label><input class="span6 text_field" type="email" name="email" /><br /><a class="btn" href="#">Enviar</a></fieldset></form>'),
	tagName: 'form',
	className: 'user',
	render: function(){
		var innerHTML = this.template();
    	this.$el.html(innerHTML).appendTo('#user_form');

		return this;
	}
});