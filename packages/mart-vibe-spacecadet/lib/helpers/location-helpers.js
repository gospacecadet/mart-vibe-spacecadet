var helpers = {
  SUPPORTED_LOCATIONS: function() {
    return SUPPORTED_LOCATIONS
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
