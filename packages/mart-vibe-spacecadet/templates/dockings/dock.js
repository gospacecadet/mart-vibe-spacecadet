const RENTING_ON_BEHALF_BIZ = 'renting-on-behalf-biz'
Template.reserveDockingFormContact.events({
  "click [name=contactRentingOnBehalfBiz]": function(event, template) {
    Session.set(RENTING_ON_BEHALF_BIZ, event.target.checked)
  }
});

Template.reserveDockingFormContact.onRendered(function() {
  var isChecked = $('[name=contactRentingOnBehalfBiz]')[0].checked
  Session.set(RENTING_ON_BEHALF_BIZ, isChecked)
})

Template.reserveDockingFormContact.helpers({
  isRentingOnBehalfBiz: function() {
    return Session.get(RENTING_ON_BEHALF_BIZ)
  }
});
