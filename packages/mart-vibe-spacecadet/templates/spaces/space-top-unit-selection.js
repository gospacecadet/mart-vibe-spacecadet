
Template.spaceTopUnitSelection.events({
  "click #hourly-price": function(event, template) {
     event.preventDefault()
     Session.set(unitSessionId(FlowRouter.getParam('propertyId')), "hour")
  },
  "click #daily-price": function(event, template) {
     event.preventDefault()
     Session.set(unitSessionId(FlowRouter.getParam('propertyId')), "day")

  },
  "click #monthly-price": function(event, template) {
     event.preventDefault()
     Session.set(unitSessionId(FlowRouter.getParam('propertyId')), "month")
  },
});

Template.spaceTopUnitSelection.onCreated(function() {
  Session.setDefault(unitSessionId(FlowRouter.getParam('propertyId')), "day")
})
