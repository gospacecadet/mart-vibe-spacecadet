var helpers = {
  notEmpty: function(cursor) {
    return cursor.count() > 0
  },
  US_STATES: function() {
    return _.map(US_STATES, function(state) {return {label: state, value: state}})
  },
  address_: function(storefrontId) {
    var storefront = Mart.Storefronts.findOne(storefrontId)
    if(storefront)
      return storefront.address
  },
  region_: function(storefrontId) {
    var storefront = Mart.Storefronts.findOne(storefrontId)
    if(storefront)
      return storefront.city + ", " + storefront.state
  }
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
