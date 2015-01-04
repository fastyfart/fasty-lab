Post = new Mongo.Collection('posts');
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/lab/fasty-lab/uploads"})],
  filter: {
      allow: {
        contentTypes: ['image/*'] //allow only images in this FS.Collection
      }
    }
});


Images.allow({

  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return false;
  },
  download: function() {
    return true;
  }
	
/*  insert: function(userId, doc) {
    return (userId && doc.metadata.owner === userId);
  },
  update: function(userId, doc, fieldNames, modifier) {
    return (userId === doc.metadata.owner);
  },
  remove: function(userId, doc) {
    return false;
  },
  download: function(userId) {
    return !!userId;
  }*/
});