var helpers = {
  transferFundsPath: function() {
    return FlowRouter.path('transferFunds')
  },
  reportsPath: function() {
    return reportsPath()
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})

reportsPath = function() {
  return FlowRouter.path('reports')
}
