homeController = RouteController.extend({
  template : 'home',
  waitOn : function(){
  	return [
      Meteor.subscribe('post'),
      Meteor.subscribe('images')
    ];
  },
  data : function(){
    return {
      title : 'Home'
    }
  },
  action : function(){
    this.render();
  }
});
