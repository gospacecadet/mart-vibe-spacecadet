FlowRouter.route('/dock', {
  name: "dock",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "dock"});
  }
});

FlowRouter.route('/manage', {
  name: "manageDockings",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "manageDockings"});
  }
});
