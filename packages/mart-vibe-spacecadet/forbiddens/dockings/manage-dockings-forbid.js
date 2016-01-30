Template.manageDockingsForbid.onCreated(function() {
  if(!Mart.canActAsMerchant())
    forbid()
})
