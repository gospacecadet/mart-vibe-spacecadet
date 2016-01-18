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
  return FlowRouter.path('dockings')
})

dockPath = function() {
  return FlowRouter.path('dock')
}
