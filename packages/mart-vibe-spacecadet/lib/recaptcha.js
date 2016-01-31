Meteor.startup(function() {
  reCAPTCHA.config({
      publickey: Meteor.settings.public.GOOGLE_RECAPTCHA_PUBLIC_KEY
  });
});
