FlowRouter.route('/:propertyId/:spaceId', {
  name: "space",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "property"});
  }
});
