Template.manageSpace.events({
  "click #publish-space": function(event, template) {
     event.preventDefault()
     var spaceId = FlowRouter.getParam('spaceId')

     Meteor.call('mart/product/publish', spaceId, function(error, spaceId) {
       console.log(error);
     })
  },
  "click #save-space": function(event, template) {
     event.preventDefault()
     $("#updateSpaceForm").submit()
  }
});
