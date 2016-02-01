var helpers = {
  subscriptionsPath: function() {
    return FlowRouter.path('subscriptions')
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
