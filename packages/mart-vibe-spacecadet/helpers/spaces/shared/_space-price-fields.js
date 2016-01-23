Template._spacePriceFields.helpers({
  priceInDollars: function() {
    return parseInt(this.priceInCents) / 100
  }
});
