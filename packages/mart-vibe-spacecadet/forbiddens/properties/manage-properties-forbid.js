Template.managePropertiesForbid.onCreated(function() {
  this.autorun(function() {
    if(!Mart.canActAsMerchant()) {
      forbid()
    } else {
      permit()
    }
  });
})
