Template.registerHelper("propertyPath", function (propertyId) {
  return FlowRouter.path('property', {propertyId: propertyId})
})

Template.registerHelper("editPropertyPath", function (propertyId) {
  return FlowRouter.path('editProperty', {propertyId: propertyId})
})

Template.registerHelper("managePropertiesPath", function () {
  return FlowRouter.path('manageProperties')
})

Template.registerHelper("newPropertyPath", function () {
  return FlowRouter.path('newProperty')
})
