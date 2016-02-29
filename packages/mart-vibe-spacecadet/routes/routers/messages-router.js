FlowRouter.route('/inbox', {
  name: "inbox",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "inbox",
      contentRight: "generalSettingsMenu",
      style: STYLES.SETTINGS,
      title: "Inbox",
      subtitle: "Send and receive messages.",
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Inbox"
  }]
});

FlowRouter.route('/inbox/:recipientId', {
  name: "thread",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "inbox",
      contentRight: "generalSettingsMenu",
      style: STYLES.SETTINGS,
      title: "Inbox",
      subtitle: "Send and receive messages.",
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Inbox"
  }]
});
