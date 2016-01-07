Template.registerHelper("spacePath", function (spaceId, propertyId) {
  return FlowRouter.path('space', {spaceId: spaceId, propertyId: propertyId})
})
