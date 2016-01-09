Template.registerHelper("money", function (priceInCents) {
  return accounting.formatMoney(priceInCents/100)
})

Template.registerHelper("dollars", function (priceInCents) {
  return accounting.formatMoney(priceInCents/100, "$", 0)
})

Template.registerHelper("numImagesAllowed", function() {
  return [ {index: 1}, {index: 2}, {index: 3},{index: 4} ]
});
