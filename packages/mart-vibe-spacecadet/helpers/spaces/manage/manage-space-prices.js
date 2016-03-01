Template.manageSpacePrices.helpers({
  prices: function() {
    var thiz = this
    return _.map(Mart.Product._UNITS(), function(unit) {
      var selector = {
        productId: thiz._id,
        unit: unit,
      }

      var price = Mart.Prices.findOne(selector)
      if(price) {
        if(price.depositInCents)
          selector.depositInDollars = price.depositInCents / 100

        selector.priceInDollars = price.priceInCents / 100
      }

      console.log('should display');
      console.log(selector);
      return selector
    })
  }
});

Template.manageSpaceEditPrice.helpers({
  id: function() {
    return spaceManagePriceId(this.unit)
  }
});

Template.manageSpaceNewPrice.helpers({
  id: function() {
    return 'manage-space-new-price-' + this.unit
  }
});
