var helpers = {
  aboutPath: function() {
    return FlowRouter.path('about')
  },
  listSpacePath: function() {
    return FlowRouter.path('listSpace')
  },
  privacyPath: function() {
    return FlowRouter.path('privacy')
  },
  termsPath: function() {
    return FlowRouter.path('terms')
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
