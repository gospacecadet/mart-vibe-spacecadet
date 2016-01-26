Template.manageSpaceEditPrice.onRendered(function() {
  var unit = Template.currentData().unit

    var hooksObject = {
      onSubmit: function(insertDoc) {
        var hook = this

        var price = Mart.Prices.findOne({
          unit: insertDoc.unit,
          productId: insertDoc.productId,
        })

        if(price) {
          Mart.Prices.update(price._id, {$set: {
            priceInCents: parseInt(insertDoc.priceInDollars * 100)
          }}, function(error, priceId) {
            if(error) {
              hook.done(error)
            } else {
              sAlert.success("Price added")
              hook.done()
            }
          })
        } else {
          Mart.Prices.insert({
            unit: insertDoc.unit,
            productId: insertDoc.productId,
            priceInCents: parseInt(insertDoc.priceInDollars * 100)
          }, function(error, priceId) {
            if(error) {
              hook.done(error)
            } else {
              sAlert.success("Price added")
              hook.done()
            }
          })
        }
        return false
      },
    };
    AutoForm.addHooks([spaceManagePriceId(unit)], hooksObject);
    AutoForm.addHooks(spaceManagePriceId(unit), MeteorErrorHook, true);
})


// Template.newSpaceEditPrice.onCreated(function() {
//   var unit = Template.currentData().unit
//   var id = 'newSpaceEditPrice' + unit
//
//   var hooksObject = {
//     onSubmit: function(insertDoc) {
//       var hook = this
//
//       var prices = NEW_SPACE_PRICES.get()
//       _.each(prices, function(price) {
//         if(price.unit === unit)
//           price.priceInDollars = insertDoc.priceInDollars
//       })
//       NEW_SPACE_PRICES.set(prices)
//       console.log(prices);
//
//       this.done()
//       return false
//     },
//   };
//   AutoForm.addHooks([id], hooksObject);
//   AutoForm.addHooks(id, MeteorErrorHook, true);
// })
