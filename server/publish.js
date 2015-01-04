Meteor.publish('post', function(){
	return Post.find();
});

Meteor.publish('images', function(){
	return Images.find();
})