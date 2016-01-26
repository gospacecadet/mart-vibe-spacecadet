Template.reserveDockingDetails.events({
  "click #dock-now-button": function(event, template){
     $("#submitDockingForm").submit()
  }
});

const RENTING_ON_BEHALF_BIZ = 'renting-on-behalf-biz'
Template.reserveDockingFormContact.events({
  "click [name=contactRentingOnBehalfBiz]": function(event, template) {
    Session.set(RENTING_ON_BEHALF_BIZ, event.target.checked)
  }
});

Template.reserveDockingFormContact.onRendered(function() {
  var isChecked = $('[name=contactRentingOnBehalfBiz]')
  if(isChecked && isChecked[0]) {
    Session.set(RENTING_ON_BEHALF_BIZ, isChecked[0].checked)
    return
  }

  Session.setDefault(RENTING_ON_BEHALF_BIZ, false)
})

Template.reserveDockingFormContact.helpers({
  isRentingOnBehalfBiz: function() {
    return Session.get(RENTING_ON_BEHALF_BIZ)
  }
});

const ADDING_CREDIT_CARD = 'adding-credit-card'
Template.reserveDockingFormBillingCards.onCreated(function() {
  Session.set(ADDING_CREDIT_CARD, true);
})

Template.creditCardRadio.events({
  "click .creditCardRadio": function(event, template) {
    var id = template.data._id

    $('#updateCartFormCardId').val(id)
    Session.set(ADDING_CREDIT_CARD, false);

  }
});

Template.reserveDockingFormBillingCards.events({
  "click #add-new-card": function(event, template) {

    Session.set(ADDING_CREDIT_CARD, true);
    $('#updateCartFormCardId').val(undefined)
  }
});

Template.reserveDockingFormBilling.helpers({
  addingCreditCard: function() {
    return Session.get(ADDING_CREDIT_CARD)
  }
});

Template.reserveDockingFormBillingCard.helpers({
  expYearOptions: function() {
    var start = new Date().getFullYear()
    var end = start + 20

    return _.map(makeList(start, end), function(year) { return {label: year, value: year}})
  },
  expMonthOptions: function() {
    return _.map(makeList(1, 12), function(month) { return {label: month, value: month}})
  }
});

var makeList = function(start, end) {
  var list = []
  for (var i = start; i <= end; i++) { list.push(i); }

  return list
}
