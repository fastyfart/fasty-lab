Router.configure({
  layoutTemplate : 'layout'
});

Router.route('/', {
  name : 'home',
  controller : 'homeController'
});

Router.route('/post', {
	name : 'post',
	controller : 'postController'
});
