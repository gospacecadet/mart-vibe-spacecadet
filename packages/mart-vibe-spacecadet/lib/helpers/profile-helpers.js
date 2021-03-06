var helpers = {
  username: function() {
    return username()
  },
  username_: function() {
    return username() || email()
  },
  email: function() {
    return email()
  },
  profileAttr: function(attr) {
    return profileAttr(attr)
  },
  fullName: function() {
    return _fullName(Meteor.userId())
  },
  hasSetBizName: function() {
    return profileAttr("businessName")
  },
  _fullName: function(userId) {
    return _fullName(userId)
  },
  firstName: function() {
    return profileAttr("firstName")
  },
  lastName: function() {
    return profileAttr("lastName")
  },
  phoneNumber: function() {
    return profileAttr("phoneNumber")
  },
  businessName: function() {
    return profileAttr("businessName")
  },
  dobDay: function() {
    return profileAttr("dobDay")
  },
  dobMonth: function() {
    return profileAttr("dobMonth")
  },
  dobYear: function() {
    return profileAttr("dobYear")
  },
  typeOnGateway: function() {
    return profileAttr("typeOnGateway")
  },
  avatarUrl: function() {
    return _avatarUrl(Meteor.userId())
  },
  _avatarUrl: function(userId) {
    return _avatarUrl(userId)
  },
  loggingIn: function() {
    return Meteor.loggingIn() || !Roles.subscription.ready()
  },
  typesOnGateway: function() {
    return typesOnGateway()
  },
  _typesOnGateway() {
    return _.map(typesOnGateway(), t => {
      return {label: t, value: t}
    })
  }
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})

 _avatarUrl = function(userId) {
  return _profileAttr(userId, "avatarUrl") || defaultAvatarUrl()
}

typesOnGateway = function() {
  return [
    Mart.GatewayTypes.Stripe.TYPE_ON_GATEWAY.INDIVIDUAL,
    Mart.GatewayTypes.Stripe.TYPE_ON_GATEWAY.COMPANY
  ]
}

var defaultAvatarUrl = function() {
  return "/packages/marvin_mart-vibe-spacecadet/assets/avatar.png"
}

var username = function() {
  var me = Meteor.user()
  if(me && me.username)
    return me.username
}

var email = function() {
  var me = Meteor.user()
  if(me && me.emails && me.emails[0])
    return me.emails[0].address
}

var profileAttr = function(attr) {
  return _profileAttr(Meteor.userId(), attr)
}

var _profileAttr = function(userId, attr) {
  var user = Meteor.users.findOne(userId)

  if(user && user.profile) {
    return user.profile[attr]
  }
}

var _fullName = function(userId) {
  profileAttr(userId, "firstName") + " " + profileAttr(userId, "lastName")
}
