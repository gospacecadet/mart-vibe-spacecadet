FlowRouter.route('/checkout', {
  name: "checkout",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "checkout"});
  }
});
