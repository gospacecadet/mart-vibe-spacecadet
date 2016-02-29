Template.loginModal.events({
  "click #loginModalLoginInstead": function(event, template){
    Session.set(loginModalSignUpId(), true)
  },
  "click #loginModalSignUpInstead": function(event, template){
    Session.set(loginModalSignUpId(), false)
  },
  "click .forgot-password-modal": function(event, template){
    event.preventDefault();

    if($.find('#loginModal').length > 0) {
      $('#loginModal').on('hidden.bs.modal', function (e) {
        FlowRouter.go(resetPasswordPath())
      })

      $("#loginModal").modal('hide')
    } else {
      FlowRouter.go(resetPasswordPath())
    }
  },
});
