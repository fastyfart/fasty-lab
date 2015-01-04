Meteor.methods({
	'savePost' : function(post){
		Post.insert({
			'title' : post.title,
			'content' : post.content,
			'tag' : post.tag,
			'img' : post.img,
			'created' : new Date(),
			'by' : 'fasty' //for now it set manually, later on it could be user that loggged in
		}, function(err){
			if(err){
				return false;
			}else{
				return true;
			}
		});
	}
});