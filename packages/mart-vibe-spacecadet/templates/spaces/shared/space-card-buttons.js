Template.spaceCardButtons.helpers({
  spaceBookingModal: function() {
    return "#space-booking-modal-" + this._id
  }
});

Template.spaceCardButtons.events({
  "click .must-log-in": function(event, template){
    sAlert.error("You must log in first.")
  }
});
