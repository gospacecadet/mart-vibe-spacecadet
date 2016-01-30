Template.managePropertiesForbid.onCreated(function() {
  var a
  this.autorun(function() {
    a = Meteor.userId()
    if(!Mart.canActAsMerchant()) {
      console.log('forbid');
      forbid()
    } else {
      console.log('permit');
      permit()
    }
  });
})
