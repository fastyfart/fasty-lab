Template.post.rendered = function () {
	$('#summernote').summernote({
		height : 300
	});
	$('#tag').tagsinput();
	console.log(Images.find({ '_id' : "yLTqw6Sc9HNFRCaBo" }));
};

Template.post.events({
	'click #save' : function(e,t){
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
							img : img
						};

						Meteor.call('savePost', post, function(err){
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
	}
});


