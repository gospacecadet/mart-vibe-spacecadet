var hooksObject = {
  onSubmit: function(insertDoc) {
    var hook = this

    var email = insertDoc.email
    var password = insertDoc.password

    $('#loginModal').on('hidden.bs.modal', function (e) {
      Meteor.loginWithPassword(email, password, function(error) {
        if(error) {
          Meteor.setTimeout(function () {
            $("#loginModal").modal('show')
            throwError(error.reason)
          }, 2 * 1000);
        } else {
          sAlert.success("Successfully logged in.")
        }
        
        hook.done()
      })
    })

    $("#loginModal").modal('hide')

    return false
  },
};
AutoForm.addHooks(['userLoginForm'], hooksObject);
AutoForm.addHooks('userLoginForm', MeteorErrorHook, true);
