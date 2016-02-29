Meteor.methods({
  'reset-password': function(email, captchaData) {
      check(email, String)
      check(captchaData, String)

      var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);

      if (!verifyCaptchaResponse.success) {
          console.log('reCAPTCHA check failed!', verifyCaptchaResponse);
          throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error);
      }

      var user = Meteor.users.findOne({emails: {$elemMatch: {address: email}}})

      if(user)
        Accounts.sendResetPasswordEmail(user._id)

      return true;
  }
});
