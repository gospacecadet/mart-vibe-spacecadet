Template.registerHelper("checkoutPath", function () {
  return dockPath()
})

Template.registerHelper("dockPath", function () {
  return dockPath()
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

dockPath = function() {
  return FlowRouter.path('dock')
}
