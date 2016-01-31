var hooksObject = {
  onSubmit: function(insertDoc, updateDoc, currentDoc) {
    var that = this
    var shopper = {
      email: insertDoc.email,
      password: insertDoc.password,
      roles: [Mart.ROLES.GLOBAL.SHOPPER],
      profile: {
        firstName: insertDoc.firstName,
        lastName: insertDoc.lastName
      }
    }

    if($.find('#loginModal').length > 0) {
      $('#loginModal').on('hidden.bs.modal', function (e) {
        Mart.Accounts.createUser(shopper, function(error) {
          if(error) {
            Meteor.setTimeout(function () {
              $("#loginModal").modal('show')
              throwError(error.reason)
            }, 2 * 1000);
          } else {
            sAlert.success("Account created.")
          }

          that.done()
        })
      })

      $("#loginModal").modal('hide')
    } else {
      Mart.Accounts.createUser(shopper, function(error) {
        if(error) {
          that.done(error)
        } else {
          sAlert.success("Account created.")
          that.done()
        }
      })
    }

    return false;
  },
  onError: function(operation, error) {
    if(error && error.reason) { // a special Meteor.error
      sAlert.error(error.reason)
    }
  }
};
AutoForm.addHooks(['shopper-sign-up-homepage'], hooksObject);
