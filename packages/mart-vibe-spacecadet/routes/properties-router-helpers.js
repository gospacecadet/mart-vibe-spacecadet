Template.registerHelper("propertyPath", function (propertyId) {
  return FlowRouter.path('property', {propertyId: propertyId})
})

Template.registerHelper("editPropertyPath", function (propertyId) {
  return FlowRouter.path('editProperty', {propertyId: propertyId})
})

Template.registerHelper("managePropertiesPath", function () {
  return FlowRouter.path('manageProperties')
})
