var hooksObject = {
  onSubmit: function(insertDoc) {
    var hook = this

    var email = insertDoc.email
    var password = insertDoc.password

    $('#loginModal').on('hidden.bs.modal', function (e) {
      Meteor.loginWithPassword(email, password, function(error) {
        Meteor.setTimeout(function () {
          if(error) {
            $("#loginModal").modal('show')
          } else {
            sAlert.success("Successfully logged in.")
          }
        }, 2 * 1000);

        hook.done()
      })
    })

    $("#loginModal").modal('hide')

    return false
  },
};
AutoForm.addHooks(['userLoginForm'], hooksObject);
AutoForm.addHooks('userLoginForm', MeteorErrorHook, true);
