var addingSessionId = 'adding-bank-account'
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
  }
});
