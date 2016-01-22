Template.managePropertyPreview.helpers({
  addingSpace: function() {
    return Session.get(addingSpaceSession(this._id))
  }
});
