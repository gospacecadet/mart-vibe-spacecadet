Template.loginModal.events({
  "click #loginModalLoginInstead": function(event, template){
    Session.set(loginModalSignUpId(), true)
  },
  "click #loginModalSignUpInstead": function(event, template){
    Session.set(loginModalSignUpId(), false)
  },
});
