Template.newProperty.onCreated(function() {
  var hooksObject = {
    after: {
      insert: function(error, propertyId) {
        if(!error) {
          FlowRouter.go(managePropertyPath(propertyId))
        }
      }
    },
    onError: function(operation, error) {
      console.log(error);
      if(error && error.reason) {
        sAlert.error(error.reason)
      }
    }
  };
  AutoForm.addHooks(['insert-property-form'], hooksObject);
})
