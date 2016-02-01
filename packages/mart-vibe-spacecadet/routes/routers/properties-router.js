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
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - New Property"
  }]
});

FlowRouter.route('/', {
  name: "homepage",
  action: function() {
    BlazeLayout.render("homepageLayout", {content: "homepage"});
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet"
  }]
});

FlowRouter.route('/properties', {
  name: "manageProperties",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "manageProperties"});
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Manage Properties"
  }]
});

FlowRouter.route('/:propertyId/manage', {
  name: "manageProperty",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "manageProperty",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Edit & Publish Property",
      subtitle: "Review property details. \
      In order to publish your Property to the public you will need to add at least one Space and one image."
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Edit & Publish Property"
  }]
});

FlowRouter.route('/:propertyId/new-space', {
  name: "newSpace",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "newSpace",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Add a Rentable Space",
      subtitle: "Spaces are the units that are available for rent on your property. \
      Be sure to upload at least one image and set at least one price in order to be able to publish the space to the public."
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - New Space"
  }]
});

FlowRouter.route('/:propertyId', {
  name: "property",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "property"});
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - View Property"
  }]
});

FlowRouter.route('/:propertyId/manage/:spaceId', {
  name: "manageSpace",
  action: function() {
    BlazeLayout.render("mainLayout", {
      contentLeft: "manageSpace",
      contentRight: "TODO",
      style: STYLES.SETTINGS,
      title: "Edit & Publish Space",
      subtitle: "Spaces are the units that are available for rent on your property. \
      Be sure to upload at least one image and set at least one price in order to be able to publish the space to the public."
    });
  },
  triggersEnter: [function(context, redirect) {
    document.title = "SpaceCadet - Edit & Publish Space"
  }]
});

FlowRouter.route('/:propertyId/:spaceId', {
  name: "space",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "space"});
  }
});
