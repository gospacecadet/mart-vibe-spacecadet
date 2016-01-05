FlowRouter.route('/property', {
  name: "property",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "property"});
  }
});
