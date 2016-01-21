Template.registerHelper("propertyPath", function (propertyId) {
  return FlowRouter.path('property', {propertyId: propertyId})
})

Template.registerHelper("managePropertyPath", function (propertyId) {
  return managePropertyPath(propertyId)
})

Template.registerHelper("managePropertiesPath", function () {
  return FlowRouter.path('manageProperties')
})

Template.registerHelper("newPropertyPath", function () {
  return FlowRouter.path('newProperty')
})

Template.registerHelper("spacePath", function (spaceId, propertyId) {
  return FlowRouter.path('space', {spaceId: spaceId, propertyId: propertyId})
})

Template.registerHelper("manageSpacePath", function (spaceId, propertyId) {
  return FlowRouter.path('manageSpace', {spaceId: spaceId, propertyId: propertyId})
})

managePropertyPath = function(propertyId) {
  return FlowRouter.path('manageProperty', {propertyId: propertyId})
}
