Template.newPrice.helpers({
  id: function() {
    return formId(this.productId, this.unit)
  },
  priceInDollars: function() {
    return parseInt(this.priceInCents) / 100
  }
});

Template.editPrice.helpers({
  id: function() {
    return formId(this.productId, this.unit)
  },
  priceInDollars: function() {
    return parseInt(this.priceInCents) / 100
  },
  connectionCharge: function() {
    return Session.get(connId(this.productId, this.unit))
  },
  landlordCut: function() {
    return Session.get(cutId(this.productId, this.unit))
  }
});

Template.editPrice.events({
  "change .space-price": function(event, template) {
    console.log('changed');
    var p = $(event.target).val()
    setPriceDetails(p, template.data.productId, template.data.unit)
  }
});

Template.editPrice.onCreated(function() {
  var p = $('[name=priceInCents]')
  var data = Template.currentData()

  if(p && p[0])
    setPriceDetails(p[0].value, data.productId, data.unit)

})

var setPriceDetails = function(price, productId, unit) {
  var connPct = Meteor.settings.public.connectionFeePct
  price = parseFloat(price)
  var conn = price * connPct * 100
  var cut = price * (1 - connPct) * 100
  console.log('setPriceDetails ' + cut + " " + conn);
  console.log(cutId(productId, unit));
  Session.set(cutId(productId, unit), cut)
  Session.set(connId(productId, unit), conn)
}

var connId = function(productId, unit) {
  return productId + "-" + unit + "-connection"
}

var cutId = function(productId, unit) {
  return productId + "-" + unit + "-cut"
}

var formId = function(productId, unit) {
  return "insertPrice-" + productId + "-" + unit
}
