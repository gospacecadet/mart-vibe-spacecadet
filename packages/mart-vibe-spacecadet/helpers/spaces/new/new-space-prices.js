Template.newSpacePrices.helpers({
  prices: function() {
    if(NEW_SPACE_PRICES)
      return NEW_SPACE_PRICES.get()
  }
});
