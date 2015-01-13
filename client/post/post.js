Session.setDefault('isView', 'posting');

Template.post.rendered = function () {
	$('#summernote').summernote({
		height : 300
	});
	$('#tag').tagsinput();
};

Template.post.events({
	'click #savedPosts' : function(e,t){
		Session.set('isView', 'savedPosts');
		console.log(Session.get('isView'));
	},
	'click .submit' : function(e,t){
		var status = e.currentTarget.id;
		var title = t.find('#title').value;
		var content = $('#summernote').code();
		var tag = $('#tag').tagsinput('items');	
		var image = t.find('#image').files;	
		var countImage = image.length;
		var counter = 0;
		var img = [];

		for (var i = 0, ln = image.length; i < ln; i++) {
			Images.insert(image[i], function (err, fileObj) {
				if(!err){
		        	idImg = fileObj._id;
		        	img.push(idImg);
	        		counter++;
	        		if(counter == countImage){ // save post when looping done (make sure all images collected)
	        			console.log(img);
						var post = {
							title : title,
							content : content,
							tag : tag,
							img : img,
							status : status
						};

						Meteor.call('submitPost', post, function(err){
							if(err){
								toastr.error('Error');
							}else{
								toastr.success('Posted !');
							}
						});
					}
				}
	    	});
		};
}
});

Template.post.helpers({
	content: function () {
		return Session.get('content');
	},
	isView : function(val){
		v = Session.get('isView');
		if(v === val){
			return true;
		}else{
			return false;
		}
	}
});


