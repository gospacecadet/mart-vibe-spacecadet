Template.newSpace.onCreated(function() {
  NEW_SPACE_UPLOADERS = new ReactiveVar({})
  NEW_SPACE_PRICES = new ReactiveVar([
    {unit: Mart.Product.UNITS.HOUR},
    {unit: Mart.Product.UNITS.DAY},
    {unit: Mart.Product.UNITS.MONTH}
  ])

  var hooksObject = {
    onSubmit: function(insertDoc) {
      var hook = this
      console.log('onSubmit');
      console.log(insertDoc);

      var prices = NEW_SPACE_PRICES.get()
      console.log('prices');
      console.log(prices);
      Mart.Products.insert(insertDoc, function(error, spaceId) {
        console.log('inserted');
        console.log(spaceId);

        if(error) {
          this.done(error)
        } else {
          attachUploadedImages("Spaces", spaceId);
          _.each(prices, function(price) {
            console.log(price);
            if(price.unit && price.priceInDollars && price.productId) {
              var insertPrice = {
                unit: price.unit,
                productId: price.productId,
                priceInCents: price.priceInDollars*100
              }

              Mart.Prices.insert(insertPrice)
            }
          })
          FlowRouter.go(manageSpacePath(spaceId, insertDoc.storefrontId))
          this.done()
        }
      })

      return false
    },
  };
  AutoForm.addHooks(['newSpaceForm'], hooksObject);
  AutoForm.addHooks('newSpaceForm', MeteorErrorHook, true);
})


Template.newSpaceEditPrice.onCreated(function() {
  var unit = Template.currentData().unit
  var id = 'newSpaceEditPrice' + unit

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
