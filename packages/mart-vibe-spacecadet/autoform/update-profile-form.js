var hooksObject = {
  onSubmit: function(insertDoc, updateDoc, currentDoc) {
    var hook = this
    var user = {
      username: insertDoc.username,
      email: insertDoc.email,
      profile: {
        firstName: insertDoc.firstName,
        lastName: insertDoc.lastName,
        phoneNumber: insertDoc.phoneNumber,
        businessName: insertDoc.businessName,
        dobDay: insertDoc.dobDay,
        dobMonth: insertDoc.dobMonth,
        dobYear: insertDoc.dobYear,
        typeOnGateway: insertDoc.typeOnGateway
      }
    }

    Meteor.call('mart/update-user', user, function(error) {
      if(error) {
        sAlert.error(error)
      } else {
        sAlert.success("Profile successfully updated. Will now try to vefify your account through Stripe.")

        if(Mart.isMerchant()) {
          Meteor.call("mart/stripe/verify", function(error, result) {
            console.log('mart/stripe/verify');
            console.log(result);
            if(error){
              sAlert.error("Could not activate your merchant account on Stripe. Please contact support.")
            }
            if(result) {
               sAlert.success("Account validate on Stripe. If you have a bank account linked to your account, we can now start paying out to your account.")
            }
          });
        }
      }

      hook.done()
    })
    return false;
  },
  onError: function(operation, error) {
    console.log(error);
    if(error && error.reason) { // a special Meteor.error
      sAlert.error(error.reason)
    }
  }
};
AutoForm.addHooks(['updateProfileForm'], hooksObject);
