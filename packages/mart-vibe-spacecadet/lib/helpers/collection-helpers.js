var helpers = {
  notEmpty: function(cursor) {
    return cursor.count() > 0
  },
  US_STATES: function() {
    return _.map(US_STATES, function(state) {return {label: state, value: state}})
  }
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
