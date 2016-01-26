Template.manageProperty.onCreated(function() {
  MANAGE_PROPERTY_UPLOADERS = new ReactiveVar({})

  var template = this
  Tracker.autorun(function(){
    var propertyId = FlowRouter.getParam('propertyId')
    console.log('propertyId');
    console.log(propertyId);
    template.subscribe("mart/storefront", propertyId);
  });

  var hooksObject = {
    onSubmit: function(insertDoc) {
      var hook = this
      Mart.Storefronts.insert(insertDoc, function(error, storefrontId) {
        if(error) {
          hook.done(error)
        } else {
          FlowRouter.go(managePropertiesPath())
          sAlert.success("Property updated")
        }
      })

      return false
    },
  };
  AutoForm.addHooks(['updatePropertyForm'], hooksObject);
  AutoForm.addHooks('updatePropertyForm', MeteorErrorHook, true);
})
