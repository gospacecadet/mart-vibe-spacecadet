FlowRouter.route('/subscriptions', {
  name: "subscriptions",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "subscriptions",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Manage Subscriptions",
      subtitle: "View and cancel ongoing subscriptions. ",
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Manage Subscriptions"
  }]
});
