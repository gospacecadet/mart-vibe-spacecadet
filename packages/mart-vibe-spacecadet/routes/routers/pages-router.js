FlowRouter.route('/about', {
  name: "about",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "about"});
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - About"
  }]
});

FlowRouter.route('/sa-launch-pod', {
  name: "saLaunchPod",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "saLaunchPod"});
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - The SA LaunchPod"
  }]
});

FlowRouter.route('/list-space', {
  name: "listSpace",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "listSpace"});
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - List Your Space"
  }]
});

FlowRouter.route('/press', {
  name: "press",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "press"});
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - News & Media"
  }]
});

FlowRouter.route('/partners', {
  name: "partners",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "partners"});
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - List Your Space"
  }]
});

FlowRouter.route('/terms', {
  name: "terms",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "terms"});
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Terms & Conditions"
  }]
});

FlowRouter.route('/privacy', {
  name: "privacy",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "privacy"});
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Privacy Policy"
  }]
});

FlowRouter.route('/reset-password', {
  name: "resetPassword",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "resetPassword",
      contentRight: "generalSettingsMenu",
      style: STYLES.SETTINGS,
      title: "Reset Password",
      subtitle: "Request password reset.",
    });
  }
});

FlowRouter.route('/reset-password-link', {
  name: "resetPasswordLink",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "resetPasswordLink",
      contentRight: "generalSettingsMenu",
      style: STYLES.SETTINGS,
      title: "Reset Password",
      subtitle: "Reset your password.",
    });
  }
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render("mainLayout", {content: 'notFound'})
  }
}



// we only need to keep history for two paths at once
// first path is what we need to check always
var previousPaths = [null, null];

function saveScrollPosition(context) {
  var pathInfo = {
    path: context.path,
    scrollPosition: $('body').scrollTop()
  };

  // add a new path and remove the first path
  // using as a queue
  previousPaths.push(pathInfo);
  previousPaths.shift();
}

function jumpToPrevScrollPosition(context) {
  var path = context.path;
  var scrollPosition = 0;
  var prevPathInfo = previousPaths[0];

  if(prevPathInfo && prevPathInfo.path === context.path) {
    scrollPosition = prevPathInfo.scrollPosition;
  }

  if(scrollPosition === 0) {
    // we can scroll right away since we don't need to wait for rendering
    $('body').animate({scrollTop: scrollPosition}, 0);
  } else {
    // Now we need to wait a bit for blaze/react does rendering.
    // We assume, there's subs-manager and we've previous page's data.
    // Here 10 millis deley is a arbitary value with some testing.
    setTimeout(function () {
     $('body').animate({scrollTop: scrollPosition}, 0);
   }, 13);
  }
}

FlowRouter.triggers.exit([saveScrollPosition]);
FlowRouter.triggers.enter([jumpToPrevScrollPosition]);
