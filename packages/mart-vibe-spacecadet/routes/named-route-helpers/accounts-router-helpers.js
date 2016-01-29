var helpers = {
  myProfilePath: function() {
    return FlowRouter.path('myProfile')
  },
  securityPath: function() {
    return FlowRouter.path('security')
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
