var helpers = {
  username: function() {
    var me = Meteor.user()
    if(me)
      return me.username
  },
  username_: function() {
    return this.username() || this.email()
  },
  email: function() {
    var me = Meteor.user()
    if(me && me.emails[0])
      return me.emails[0].address
  },
  profileAttr: function(cursor) {
    var user = Meteor.user()

    if(user && user.profile) {
      return user.profile[attr]
    }
  },
  fullName: function() {
    return this._fullName(Meteor.userId())
  },
  hasSetBizName: function() {
    return this.profileAttr("businessName")
  },
  _fullName: function(userId) {
    this.profileAttr("firstName") + " " + this.profileAttr("lastName")
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
