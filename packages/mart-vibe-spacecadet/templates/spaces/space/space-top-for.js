Template.spaceTopForUnit.events({
  "focus .start-date": function(event, template) {
    var space = this;
    $(event.target).datepicker({
      onSelect: function(dateText, inst) {
        Session.set(spaceDateId(space._id), new Date(dateText))
      }
    });
  },
});

Template.spaceTopForDaily.events({
  "change .daily-num": function(event, template) {
    var numDays = $(event.target).val()

    Session.set(spaceNumDaysId(this._id), numDays)
  },
});
Template.spaceTopForUnit.helpers({
  hourlySelected: function() {
    return Session.get(unitSessionId(this._id)) === HOUR
  },
  dailySelected: function() {
    return Session.get(unitSessionId(this._id)) === DAY
  },
  monthlySelected: function() {
    return Session.get(unitSessionId(this._id)) === MONTH
  }
});
