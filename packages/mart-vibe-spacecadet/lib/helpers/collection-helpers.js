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
  },
  owns: function(obj) {
    return owns(obj)
  },
  reps: function(obj) {
    return reps(obj)
  }
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})

owns = function(obj) {
  return obj && obj.userId && (obj.userId === Meteor.userId())
}

reps = function(obj) {
  return obj && obj.repId && (obj.repId === Meteor.userId())
}

canManageProperty = function(property) {
  return owns(property) || Mart.isAdmin() || reps(property)
}
