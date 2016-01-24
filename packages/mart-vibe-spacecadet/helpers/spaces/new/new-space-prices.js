Template.newSpacePrices.helpers({
  prices: function() {
    if(NEW_SPACE_PRICES.get())
      return NEW_SPACE_PRICES.get()
  }
});

Template.newSpaceEditPrice.helpers({
  id: function() {
    return 'newSpaceEditPrice' + this.unit
  }
});
