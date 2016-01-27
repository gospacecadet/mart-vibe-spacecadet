Template.spaceCardButtons.helpers({
  spaceBookingModal: function() {
    return "#space-booking-modal-" + this._id
  },
  moreDetails: function() {
    return this.description.length > 140
  }
});

Template.spaceCardButtons.events({
  "click .must-log-in": function(event, template) {
    $("#loginModal").modal()
  }
});
