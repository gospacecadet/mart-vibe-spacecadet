Errors = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({message: message, alertClass: "alert-danger"});
};

addNotification = function(message) {
  Errors.insert({message: message, alertClass: "alert-success"});
};

Template.error.onRendered(function() {
  var error = this.data;
  Meteor.setTimeout(function () {
    Errors.remove(error._id);
  }, 3500);
});

Template.errors.helpers({
  errors: function() {
    return Errors.find();
  }
});
