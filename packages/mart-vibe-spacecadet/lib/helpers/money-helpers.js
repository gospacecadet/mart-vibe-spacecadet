var helpers = {
  money: function(priceInCents) {
    return accounting.formatMoney(priceInCents/100)
  },
  dollars: function(priceInCents) {
    return accounting.formatMoney(priceInCents/100, "$", 0)
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
