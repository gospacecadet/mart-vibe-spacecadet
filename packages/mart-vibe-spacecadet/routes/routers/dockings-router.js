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

FlowRouter.route('/docking-history-pending', {
  name: "dockingHistoryPending",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "dockingHistoryPending",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Docking History",
      subtitle: "Review dockings that are awaiting landlord approval.",
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Pending Dockings"
  }]
});

FlowRouter.route('/docking-history-accepted', {
  name: "dockingHistoryAccepted",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "dockingHistoryAccepted",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Docking History - Accepted",
      subtitle: "Review accepted dockings.",
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Upcoming Docking History"
  }]
});

FlowRouter.route('/docking-history-rejected', {
  name: "dockingHistoryRejected",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "dockingHistoryRejected",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Docking History - Rejected",
      subtitle: "View dockings that have been rejected.",
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Rejected Docking History"
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
