Template.registerHelper("checkoutPath", function (propertyId) {
  return FlowRouter.path('checkout', {propertyId: propertyId})
})
