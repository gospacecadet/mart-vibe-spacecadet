var addingSessionId = 'adding-bank-account'
var accountTypeId = 'account-type-id'
Template.bankAccounts.events({
  "click #new-bank-account-button": function(event, template) {
    var alreadyAdding = Session.get(addingSessionId)
    Session.set(addingSessionId, !alreadyAdding)
  }
});

Template.bankAccounts.helpers({
  addingBankAccount: function() {
    return Session.get(addingSessionId)
  }
});

Template.newBankAccountForm.events({
  "click #cancel-add-bank-account-button": function(event, template){
    Session.set(addingSessionId, false)
  },
  'change #bankAccountType': function(event, template){
    Session.set(accountTypeId, $(event.target).val())
  },
});

Template.newBankAccountForm.helpers({
  bankBusinessName: function() {
    if(Meteor.user() && Meteor.user().profile) {
      var profile = Meteor.user().profile
      var accountType = Session.get(accountTypeId)

      if(accountType === 'individual') {
        return profile.firstName + " " + profile.lastName
      } else if(accountType === 'company') {
        return profile.businessName || ""
      }
    }
  }
});
