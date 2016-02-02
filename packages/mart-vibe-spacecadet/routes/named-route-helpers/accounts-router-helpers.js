var helpers = {
  myProfilePath: function() {
    return FlowRouter.path('myProfile')
  },
  securityPath: function() {
    return FlowRouter.path('security')
  },
  resetPasswordPath: function() {
    return resetPasswordPath()
  },
  resetPasswordLinkPath: function() {
    return resetPasswordLinkPath()
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})

resetPasswordLinkPath = function() {
  return FlowRouter.path('resetPasswordLink')
}

resetPasswordPath = function() {
  return FlowRouter.path('resetPassword')
}
