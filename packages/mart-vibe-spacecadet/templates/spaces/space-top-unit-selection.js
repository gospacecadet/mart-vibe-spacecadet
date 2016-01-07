var units = [
  {name: HOUR, id: "#hourly-price"},
  {name: DAY, id: "#daily-price"},
  {name: MONTH, id: "#monthly-price"}
]

Template.spaceTopUnitSelection.events({
  "click #hourly-price": function(event, template) {
     event.preventDefault()
     Session.set(unitSessionId(this.propertyId), HOUR)
  },
  "click #daily-price": function(event, template) {
     event.preventDefault()
     Session.set(unitSessionId(this.propertyId), DAY)

  },
  "click #monthly-price": function(event, template) {
     event.preventDefault()
     Session.set(unitSessionId(this.propertyId), MONTH)
  },
});

Template.spaceTopUnitSelection.onCreated(function() {
  Session.setDefault(unitSessionId(this.propertyId), DAY)
})

Template.spaceTopUnitSelection.helpers({
  activeUnitClass: function(unit) {
    let activeClass = 'unit-active'
    if(unit === Session.get(unitSessionId(this.propertyId))) {
      return activeClass
    }
  }
});
