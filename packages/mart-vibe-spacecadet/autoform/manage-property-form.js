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
