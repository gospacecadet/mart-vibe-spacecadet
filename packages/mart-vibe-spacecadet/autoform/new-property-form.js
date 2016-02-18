var hooksObject = {
  // Insert storefront,
  // link preloaded images to storefont,
  // redirect to manage page
  onSubmit: function(insertDoc) {
    var hook = this
    Mart.Storefronts.insert(insertDoc, function(error, storefrontId) {
      if(error) {
        hook.done(error)
      } else {
        attachUploadedImages("Properties", storefrontId);
        FlowRouter.go(managePropertyPath(storefrontId))
      }
    })

    return false
  },
};
AutoForm.addHooks(['insert-property-form'], hooksObject);
AutoForm.addHooks('insert-property-form', MeteorErrorHook, true);
