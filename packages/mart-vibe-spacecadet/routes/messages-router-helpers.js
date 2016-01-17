Template.registerHelper("inboxPath", function () {
  return FlowRouter.path('inbox')
})

Template.registerHelper("threadPath", function (recipientId) {
  return FlowRouter.path('thread', {recipientId: recipientId})
})
