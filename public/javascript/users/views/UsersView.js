var UsersView = Backbone.View.extend({
	initialize: function(){
    	this.listenTo(this.collection, 'add', this.renderOne);
    	this.listenTo(this.collection, 'reset', this.renderAll);
    	this.listenTo(this.collection, 'sync', this.renderAll);
  	},

	tagName: 	'ul',
	className: 	'users',

	render: function(){
	   this.collection.trigger('reset');
	   return this;
	 },

	 renderAll: function(){
	   this.$el.empty();
	   this.collection.forEach(this.renderOne);
	 },

	 renderOne: function(user){
	 	cl('renderOne', user);
	   var userView = new UserView({});
	   userView.model = user;
	   userView.render().$el.appendTo(this.$el)
	 }
});