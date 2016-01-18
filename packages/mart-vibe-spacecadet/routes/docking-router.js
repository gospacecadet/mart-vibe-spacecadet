FlowRouter.route('/dock', {
  name: "dock",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "dock"});
  }
});

FlowRouter.route('/manage', {
  name: "manageDockings",
  action: function() {
    BlazeLayout.render("mainLayout", {
      content: "manageDockings",
      style: "boxed",
      title: "Docking Management",
      subtitle: "Manage new docking requests, generate reports, and get analysis on how your properties are doing.",
    });
  }
});

FlowRouter.route('/dockings', {
  name: "dockings",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "dockings",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Docking Information",
      subtitle: "Review upcoming dockings and get order history.",
    });
  }
});
