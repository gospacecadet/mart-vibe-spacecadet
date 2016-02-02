var helpers = {
  checkoutPath: function(lineItemId) {
    return dockPath(lineItemId)
  },
  dockPath: function(lineItemId) {
    return dockPath(lineItemId)
  },
  manageDockingsPath: function() {
    return FlowRouter.path('manageDockings')
  },
  dockingHistoryPendingPath: function() {
    return FlowRouter.path('dockingHistoryPending')
  },
  dockingHistoryAcceptedPath: function() {
    return FlowRouter.path('dockingHistoryAccepted')
  },
  dockingHistoryRejectedPath: function() {
    return FlowRouter.path('dockingHistoryRejected')
  },
  dockingConfirmationPath: function() {
    return FlowRouter.path('dockingConfirmation', {cartIds: cartIds})
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})

dockPath = function(lineItemId) {
  return FlowRouter.path('dock', {lineItemId: lineItemId})
}
