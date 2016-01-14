Template.spaceCard.helpers({
  showSpaceDetails: function() {
    return Session.get(detailsSession(this._id))
  }
});

Template.spaceCard.events({
  "click .space-details-button": function(event, template) {
    var spaceId = template.data._id;
    var sid = detailsSession(spaceId)

    Session.set(sid, !Session.get(sid))
  }
});

var detailsSession = function(spaceId) {
  return "space-details-" + spaceId
}
