FlowRouter.route('/security', {
  name: "security",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "security",
      contentRight: "generalSettingsMenu",
      style: STYLES.SETTINGS,
      title: "Security Settings",
      subtitle: "Update your password",
    });
  }
});

FlowRouter.route('/profile', {
  name: "myProfile",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "myProfile",
      contentRight: "generalSettingsMenu",
      style: STYLES.SETTINGS,
      title: "My Profile",
      subtitle: "Edit your personal details & email.",
    });
  }
});
