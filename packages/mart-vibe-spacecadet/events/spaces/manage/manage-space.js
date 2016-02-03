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
  },
});

Template.spacePublishedButtons.events({
  'click .unpublish-space-button': function(event, template) {
    event.preventDefault()
    var spaceId = template.data._id

    Meteor.call('mart/product/unpublish', spaceId, function(error, spaceId) {
      if(error)
        return sAlert.error("Please try again later.")

      sAlert.success("Space unpublished!")
    })
  }
});
