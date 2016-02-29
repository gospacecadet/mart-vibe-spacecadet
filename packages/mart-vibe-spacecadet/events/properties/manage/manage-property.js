Template.managePropertyForm.events({
  "click #publish-property": function(event, template) {
    var propertyId = template.data._id

    Meteor.call('mart/storefront/publish', propertyId, function(error, propertyId) {
      if(error)
        return sAlert.error("Please try again later.")

      sAlert.success("Property published!")
    })
  },
  'click .unpublish-property-button': function(event, template) {
    event.preventDefault()
    var propertyId = template.data._id

    Meteor.call('mart/storefront/unpublish', propertyId, function(error, propertyId) {
      if(error)
        return sAlert.error("Please try again later.")

      sAlert.success("Property unpublished!")    })
  }
});
