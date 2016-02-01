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
