Template.manageSpacePrices.helpers({
  prices: function() {
    var thiz = this
    return _.map(Mart.Product._UNITS(), function(unit) {
      var selector = {
        productId: thiz._id,
        unit: unit,
      }

      var product = Mart.Prices.findOne(selector)
      if(product)
        selector.priceInDollars = product.priceInCents / 100

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
