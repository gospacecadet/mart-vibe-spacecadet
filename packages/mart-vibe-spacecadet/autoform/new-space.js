var hooksObject = {
  onSubmit: function(insertDoc) {
    var hook = this

    var prices = NEW_SPACE_PRICES.get()
    Mart.Products.insert(insertDoc, function(error, spaceId) {

      if(error) {
        hook.done(error)
      } else {
        attachUploadedImages("Spaces", spaceId);
        _.each(prices, function(price) {
          price.productId = spaceId
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
        hook.done()
      }
    })

    return false
  },
};
AutoForm.addHooks(['newSpaceForm'], hooksObject);
AutoForm.addHooks('newSpaceForm', MeteorErrorHook, true);
