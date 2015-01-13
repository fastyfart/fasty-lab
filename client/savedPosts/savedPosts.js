Template.savedPosts.helpers({
	saveds: function () {
		return Post.find({status : {$ne : 'save'}}, {sort : {created : -1}}).fetch();
	}
});

Template.savedPosts.events({
	'click .saved': function () {
		console.log(this.title);
	}
});