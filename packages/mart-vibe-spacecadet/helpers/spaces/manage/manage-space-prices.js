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

      console.log(selector);
      return selector
    })
  }
});

Template.manageSpaceEditPrice.helpers({
  id: function() {
    console.log('id');
    console.log(spaceManagePriceId(this.unit));
    return spaceManagePriceId(this.unit)
  }
});

Template.manageSpaceNewPrice.helpers({
  id: function() {
    return 'manage-space-new-price-' + this.unit
  }
});
