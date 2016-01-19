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

FlowRouter.route('/docking-history', {
  name: "dockingHistory",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "dockingHistory",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Docking History",
      subtitle: "Review upcoming dockings and get order history.",
    });
  }
});

// FlowRouter.route('/docking-confirmation/:cartIds', {
//   name: "dockingConfirmation",
//   action: function() {
//     BlazeLayout.render("mainLayout", {
//       contentLeft: "dockingConfirmation",
//       contentRight: "TODO",
//       style: STYLES.SETTINGS,
//       title: "Docking Confirmation",
//       subtitle: "Review your docking details. Contact the landlord with any questions.",
//     });
//   }
// });
