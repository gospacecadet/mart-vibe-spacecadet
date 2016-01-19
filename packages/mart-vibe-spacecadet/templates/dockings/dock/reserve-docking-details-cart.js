Template.reserveDockingDetailsCart.helpers({
  address3AtCheckout: function() {
    return this.city + ", " + this.state + " " + this.zip
  }
});
