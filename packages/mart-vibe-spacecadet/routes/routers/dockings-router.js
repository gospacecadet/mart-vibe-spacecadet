FlowRouter.route('/dock/:lineItemId', {
  name: "dock",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "dock"});
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Dock"
  }]
});

FlowRouter.route('/manage', {
  name: "manageDockings",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "manageDockings",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Docking Management",
      subtitle: "Manage new docking requests, generate reports, and get analysis on how your properties are doing.",
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Manage Dockings"
  }]
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
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Docking History"
  }]
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
