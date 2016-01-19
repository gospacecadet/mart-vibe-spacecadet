Template.registerHelper("firstName", function () {
  return userAttr("firstName")
})

Template.registerHelper("lastName", function () {
  return userAttr("lastName")
})

Template.registerHelper("businessName", function () {
  return userAttr("businessName")
})

Template.registerHelper("phoneNumber", function () {
  return userAttr("phoneNumber")
})

Template.registerHelper("username", function () {
  var me = Meteor.user()
  if(me)
    return me.username
})

Template.registerHelper("email", function () {
  var me = Meteor.user()
  if(me && me.emails[0])
    return me.emails[0].address
})

Template.registerHelper("rentingOnBehalfBiz", function () {
  return !!userAttr("businessName")
})

var userAttr = function(attr) {
var user = Meteor.user()
if(user && user.profile) {
  return user.profile[attr]
}
}