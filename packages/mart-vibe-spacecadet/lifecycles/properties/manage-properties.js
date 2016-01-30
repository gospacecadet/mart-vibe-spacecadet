Template.manageProperties.onCreated(function() {
  this.subscribe("mart/storefronts");
})

Template._managePropertiesForbid.onCreated(function() {
  if(!Mart.canActAsMerchant())
    forbid()
})
