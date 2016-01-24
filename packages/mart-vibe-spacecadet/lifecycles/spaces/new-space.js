Template.newSpace.onCreated(function() {
  NEW_SPACE_PRICES = new ReactiveVar([
    {unit: Mart.Product.UNITS.HOUR},
    {unit: Mart.Product.UNITS.DAY},
    {unit: Mart.Product.UNITS.MONTH}
  ])
})


Template.newSpaceEditPrice.onCreated(function() {
  console.log('newSpaceEditPrice');
  var unit = Template.currentData().unit
  var id = 'newSpaceEditPrice' + unit
  console.log(id);

  var hooksObject = {
    onSubmit: function(insertDoc) {
      var hook = this

      var prices = NEW_SPACE_PRICES.get()
      _.each(prices, function(price) {
        if(price.unit === unit)
          price.priceInDollars = insertDoc.priceInDollars
      })
      NEW_SPACE_PRICES.set(prices)
      console.log(prices);

      this.done()
      return false
    },
  };
  AutoForm.addHooks([id], hooksObject);
  AutoForm.addHooks(id, MeteorErrorHook, true);
})
