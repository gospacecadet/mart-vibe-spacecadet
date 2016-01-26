Template.managePropertyForm.events({
  "click #publish-property": function(event, template) {
    console.log('publish-property');
    var propertyId = template.data._id
    console.log(propertyId);
    Meteor.call('mart/storefront/publish', propertyId, function(error, propertyId) {
      console.log(error);
    })
  }
});
