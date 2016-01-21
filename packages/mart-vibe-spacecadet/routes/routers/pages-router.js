FlowRouter.route('/about', {
  name: "about",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "about"});
  }
});

FlowRouter.route('/list-space', {
  name: "listSpace",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "listSpace"});
  }
});

FlowRouter.route('/terms', {
  name: "terms",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "terms"});
  }
});

FlowRouter.route('/privacy', {
  name: "privacy",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "privacy"});
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
