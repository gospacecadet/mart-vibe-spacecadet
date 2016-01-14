Template.spaceTopForUnit.events({
  "focus #hourly-start-date": function(event, template) {
    $("#hourly-start-date").datepicker();
  },
  "focus #daily-start-date": function(event, template) {
    $("#daily-start-date").datepicker();
  },
  "focus #monthly-start-date": function(event, template) {
    $("#monthly-start-date").datepicker();
  }
});

Template.spaceTopForUnit.helpers({
  hourlySelected: function() {
    return Session.get(unitSessionId(this.propertyId)) === HOUR
  },
  dailySelected: function() {
    return Session.get(unitSessionId(this.propertyId)) === DAY
  },
  monthlySelected: function() {
    return Session.get(unitSessionId(this.propertyId)) === MONTH
  }
});
