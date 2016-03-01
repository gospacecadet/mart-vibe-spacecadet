Template.spaceBooking.helpers({
  spaceBookingModal: function() {
    return "space-booking-modal-" + this._id
  },
  depositInCents: function() {
    var p = Mart.Prices.findOne({
      unit:  Session.get(unitSessionId(this._id)),
      productId: this._id
    })

    if(p)
      return p.depositInCents
  }
});
