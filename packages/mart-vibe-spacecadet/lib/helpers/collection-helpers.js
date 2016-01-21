var helpers = {
  notEmpty: function(cursor) {
    return cursor.count() > 0
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
