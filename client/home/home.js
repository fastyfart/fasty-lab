Session.setDefault('fullPost', false);

Template.home.helpers({
	isFull: function () {
		return Session.get('fullPost');
	}
});

Template.postNail.helpers({
	postNail: function () {
		//return Post.find({}, {sort : {created : -1}});
		var post = Post.find({}, {sort : {created : -1}}).fetch();
		post.forEach(function(val, i){
			var arr = val.img;
			if(val.img){
				post[i].imageName = Images.find({_id : {$in : val.img } }).fetch();
			}
			
		});
		return post;
	},

	cut : function(content){
		var cut = _(content).prune(301);
		return cut;
	},

});

Template.postNail.events({
	'click #fullPost': function () {
		console.log(this._id);
		Session.set('fullPost', this._id);
	}
});

Template.fullPost.helpers({
	post: function () {
		var id = Session.get('fullPost');
		var post = Post.findOne(id);
		/*post.forEach(function (val, i) {
			if(val.img){
				post[i].imageName = Images.find({_id : {$in : val.img } }).fetch();
			}
		});*/
		
		post.imageName = Images.find({_id : {$in : post.img } }).fetch();

		console.log(post);
		return post;
	}
});