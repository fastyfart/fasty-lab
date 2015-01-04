postController = RouteController.extend({
	template : 'post',
	waitOn : function(){
		return [
			Meteor.subscribe('post'),
			Meteor.subscribe('images')
		];
	},
	action : function(){
		this.render();
	}
});