Template.registerHelper("checkoutPath", function (lineItemId) {
  return dockPath(lineItemId)
})

Template.registerHelper("dockPath", function (lineItemId) {
  return dockPath(lineItemId)
})

Template.registerHelper('manageDockingsPath', function() {
  return FlowRouter.path('manageDockings')
})

Template.registerHelper('dockingsPath', function() {
  return FlowRouter.path('dockingHistory')
})

Template.registerHelper('dockingHistoryPath', function() {
  return FlowRouter.path('dockingHistory')
})

Template.registerHelper('dockingConfirmationPath', function(cartIds) {
  return FlowRouter.path('dockingConfirmation', {cartIds: cartIds})
})

dockPath = function(lineItemId) {
  return FlowRouter.path('dock', {lineItemId: lineItemId})
}
