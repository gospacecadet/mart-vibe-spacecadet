Template.resetPassword.events({
  "submit #reset-password-form": function(event, template) {
    event.preventDefault();

    var email = template.$("#reset-password-form-email").val()

    //get the captcha data
    var captchaData = grecaptcha.getResponse();

    Meteor.call('reset-password', email, captchaData, function(error, result) {
      // reset the captcha
      grecaptcha.reset();

      if (error) {
        sAlert.error(error.reason)
      } else {
        template.$("#reset-password-form-email").val("")
        sAlert.success("If your email exists on our system a reset link will be arriving shortly.")
      }
    });
  }
});

// since we don't want to pass around the callback that we get from our event
// handlers, we just make it a variable for the whole file
var doneCallback;
var resetPasswordSessionId = "resetPasswordToken"

Accounts.onResetPasswordLink(function (token, done) {
  Session.set(resetPasswordSessionId, token);
  FlowRouter.go(resetPasswordLinkPath());
  doneCallback = done;
});

Template.resetPasswordLink.events({
  "submit #reset-password-link-form": function(event, template) {
    event.preventDefault();

    var newPassword = template.$("#reset-password-link-form-password").val()

    if(newPassword.length < 8)
      return sAlert.error("Password must be at least 8 characters")

    var token = Session.get(resetPasswordSessionId)

    Accounts.resetPassword(token, newPassword,
      function (error) {
        if (error) {
          sAlert.error(error.reason || "Unknown error");
        } else {
          Session.set(resetPasswordSessionId, null);
          if (doneCallback) {
            FlowRouter.go('/')
            sAlert.success("Password reset.")
            doneCallback();
          }
        }
      });
  }
});
