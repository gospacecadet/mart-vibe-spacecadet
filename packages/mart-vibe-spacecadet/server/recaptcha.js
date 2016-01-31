Meteor.startup(function() {
  reCAPTCHA.config({
    privatekey: Meteor.settings.GOOGLE_RECAPTCHA_PRIVATE_KEY
  });
});
