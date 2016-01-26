Template.manageSpace.events({
  "click #publish-space": function(event, template) {
     event.preventDefault()

     Meteor.call('mart/product/publish', template.data._id, function(error, spaceId) {
       console.log(error);
     })
  }
});
