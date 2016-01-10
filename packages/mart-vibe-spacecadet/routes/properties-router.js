FlowRouter.route('/new-property', {
  name: "newProperty",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "newProperty"});
  }
});

FlowRouter.route('/', {
  name: "homepage",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "homepage"});
  }
});

FlowRouter.route('/properties', {
  name: "manageProperties",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "manageProperties"});
  }
});

FlowRouter.route('/:propertyId/manage', {
  name: "manageProperty",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "manageProperty"});
  }
});

FlowRouter.route('/:propertyId', {
  name: "property",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "property"});
  }
});

FlowRouter.route('/:propertyId/manage/:spaceId', {
  name: "manageSpace",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "manageSpace"});
  }
});

FlowRouter.route('/:propertyId/:spaceId', {
  name: "space",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "space"});
  }
});
