_.each(UNITS, function(unit) {
  var id = 'newSpaceEditPrice' + unit
  var hooksObject = {
    onSubmit: function(insertDoc) {
      var hook = this

      var prices = _.map(NEW_SPACE_PRICES.get(), function(p) {
        if(p.unit === unit) {
          p.priceInDollars = insertDoc.priceInDollars

          if(insertDoc.depositInDollars)
            p.depositInDollars = insertDoc.depositInDollars
        }

        return p
      })

      NEW_SPACE_PRICES.set(prices)

      hook.done()
      return false
    },
  };
  AutoForm.addHooks(id, MeteorErrorHook, true);
  AutoForm.addHooks(id, hooksObject, true);
})
