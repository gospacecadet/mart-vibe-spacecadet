Template.manageDockingsForbid.onCreated(function() {
  if(!Mart.canActAsMerchant())
    forbid()
})

Template.reserveDockingDetailsCart.onCreated(function() {
  if(Meteor.userId() !== Template.currentData().userId)
    forbid()

  if(Template.currentData().state !== Mart.Cart.STATES.SHOPPING)
    forbid()
})
