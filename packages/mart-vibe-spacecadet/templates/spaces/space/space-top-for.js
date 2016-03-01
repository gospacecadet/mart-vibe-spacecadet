Template.spaceTopForUnit.onRendered(function() {
  console.log('onRendered')
  var spaceId = Template.currentData()._id
  console.log(spaceId);
  $('#start-date-' + spaceId).pickadate({
    onSet: function(context) {
      console.log('date set');
      console.log(spaceId);
      Session.set(spaceDateId(spaceId), new Date(context.select))
    }
  })
})

Template.spaceTopForDaily.events({
  "change .daily-num": function(event, template) {
    var numDays = $(event.target).val()

    Session.set(spaceNumDaysId(this._id), numDays)
  },

});

Template.spaceTopForHourly.events({
  "change .hourly-num":  function(event, template) {
    var numHours = $(event.target).val()

    Session.set(spaceNumHoursId(this._id), numHours)
  },
  "change .hourly-start-ampm":  function(event, template) {
    var ampm = $(event.target).val()

    Session.set(spaceStartAMPMId(this._id), ampm)
  },
  "change .hourly-start-hour":  function(event, template) {
    var startHour = $(event.target).val()

    Session.set(spaceStartHourId(this._id), startHour)
  },
  "change .hourly-start-minute":  function(event, template) {
    var startMin = $(event.target).val()

    Session.set(spaceStartMinuteId(this._id), startMin)
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
