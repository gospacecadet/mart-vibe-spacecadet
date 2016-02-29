FlowRouter.route('/bank-accounts', {
  name: "bankAccounts",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "bankAccounts",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Manage Bank Accounts",
      subtitle: "Create and link bank accounts where you wish to receive your funds",
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Manage Bank Accounts"
  }]
});
