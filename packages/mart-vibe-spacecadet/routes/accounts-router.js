// FlowRouter.route('/profile/:userId', {
//   name: "userProfile",
//   action: function() {
//     BlazeLayout.render("mainLayout", {
//       content: "userProfile",
//       style: "boxed",
//       title: "Docking Information",
//       subtitle: "Review upcoming dockings and get order history.",
//     });
//   }
// });

FlowRouter.route('/profile', {
  name: "myProfile",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "myProfile",
      contentRight: "generalSettingsMenu",
      style: "SETTINGS",
      title: "My Profile",
      subtitle: "Edit your personal details, update your email & password.",
    });
  }
});
