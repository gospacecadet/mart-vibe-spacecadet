var hooksObject = {
  onSubmit: function(insertDoc) {
    console.log(insertDoc);
    var hook = this
    var storefrontId = FlowRouter.getParam('propertyId')
    Mart.Storefronts.update(storefrontId, {$set: insertDoc}, function(error, storefrontId) {
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
