Template.managePropertyPreview.events({
  "click .add-space-button": function(event, template) {
    var id = addingSpaceSession(template.data._id)
    var v = Session.get(addingSpaceSession(template.data._id))

    Session.set(id, true)
  },
  "click .cancel-space-button": function(event, template) {
    var id = addingSpaceSession(template.data._id)
    var v = Session.get(addingSpaceSession(template.data._id))

    Session.set(id, false)
  }
});
