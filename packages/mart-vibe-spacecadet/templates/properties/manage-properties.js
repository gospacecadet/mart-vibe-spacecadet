Template.managePropertyPreview.helpers({
  addingSpace: function() {
    return Session.get(addingSpaceSession(this._id))
  }
});

var addingSpaceSession = function(propertyId) {
  return 'new-space-' + propertyId
}

Template.managePropertyPreview.events({
  "click .add-space-button": function(event, template) {
    var id = addingSpaceSession(template.data._id)
    var v = Session.get(addingSpaceSession(template.data._id))

    Session.set(id, true)
  }
});

Template.managePropertyPreview.events({
  "click .cancel-space-button": function(event, template) {
    var id = addingSpaceSession(template.data._id)
    var v = Session.get(addingSpaceSession(template.data._id))

    Session.set(id, false)
  }
});
