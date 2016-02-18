Template.subscription.events({
  "click .cancel-subscription-button": function(event, template) {
     event.preventDefault();
     console.log('clicked');
     var subscriptionId = template.data._id
     Meteor.call('mart/subscription/cancel', subscriptionId, function(error, result) {
       if(error)
        return sAlerr.error('Error, try again later.')

        sAlert.success("Subscription cancelled.")
     })
  }
});
