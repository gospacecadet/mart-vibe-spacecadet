
FlowRouter.route('/new-property', {
  name: "newProperty",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "newProperty",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Create New Property",
      subtitle: "Each Property holds many Spaces.\
      For example, if you are a farmers market, the Property is the entire market. \
      You will be able to add spaces next.",
    });
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
