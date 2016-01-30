Template.newPropertyForbid.onCreated(function() {
  if(!Mart.canActAsMerchant())
    forbid()
})
