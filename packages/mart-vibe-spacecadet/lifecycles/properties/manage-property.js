Template.manageProperty.onCreated(function() {
  var template = this

  MANAGE_PROPERTY_UPLOADERS = new ReactiveVar({})

  Tracker.autorun(function(){
    var propertyId = FlowRouter.getParam('propertyId')
    template.subscribe("mart/storefront", propertyId);
  });
})
