FlowRouter.route('/transfer-funds', {
  name: "transferFunds",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "transferFunds",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Transfer Funds",
      subtitle: "Transfer funds to landlords.",
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Transfer Funds"
  }]
});

FlowRouter.route('/reports', {
  name: "reports",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "reports",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Reports",
      subtitle: "Export CSV of dockings.",
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Reports"
  }]
});
