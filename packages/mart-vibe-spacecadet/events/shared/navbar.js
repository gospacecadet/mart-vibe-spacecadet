Template.navbar.events({
  "click #navbar-toggler": function(event, template) {
    Meteor.setTimeout(function () {
      var mainNavHeight = $("#spacecadet-navabar").height()
      var smNavHeight = $("#navbarUnhide").height()

      var totalHeight = parseInt(mainNavHeight) + parseInt(smNavHeight)
      totalHeight = totalHeight.toString() + "px"

      $("#navbar-sm-padding").css('margin-top', totalHeight)
    }, 650);

  }
});

Template.navbarMdDropdownLogout.events({
  "click #logout-button": function(event, template) {
    Meteor.logout()
  }
});

Template.navbarLogin.events({
  "submit #navbar-login": function(event, template) {
     event.preventDefault();

     var email = $(event.target).find('[name=email]').val()
     var password = $(event.target).find('[name=password]').val()
     Meteor.loginWithPassword(email, password, function(error, response) {
       console.log(error);
       if(error) {
         sAlert.error("You could not be logged in: " + error.reason)
       } else {
        //  sAlert.success("Logged in successfully!")
       }
     })
  }
});

Template.navbarSm.events({
  "submit #navbar-sm-login": function(event, template) {
     event.preventDefault();

     var email = $(event.target).find('[name=email]').val()
     var password = $(event.target).find('[name=password]').val()

     Meteor.loginWithPassword(email, password, function(error, response) {
       if(error) {
         sAlert.error("You could not be logged in: " + error.reason)
       } else {
        //  sAlert.success("Logged in successfully!")
       }
     })
  }
});
