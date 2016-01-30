var forbbidenSessionId = "forbidden-session-id"

var helpers = {
  isForbbiden: function() {
    return Session.get(forbbidenSessionId)
  },
  forbid: function() {
    forbid()
  }
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})

forbid = function() {
  Session.set(forbbidenSessionId, true)
}

permit = function() {
  Session.set(forbbidenSessionId, false)
}
