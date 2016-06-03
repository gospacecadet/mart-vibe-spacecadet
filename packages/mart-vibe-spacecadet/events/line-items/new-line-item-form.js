Template.spaceBookingForm.events({
  "click .submit-new-line": function(event, template) {
    event.preventDefault();
    event.target.disabled = true;

    var spaceId = template.data._id
    var unit = currentUnit(spaceId)

    // if(currentDate(spaceId).getTime() < (new Date()).getTime()) {
    //   throwError("Must choose a date in the future")
    //   $("#submit-new-line").disabled = false;
    //
    //   return;
    // }

    if(unit === HOUR) {
      Mart.LineItems.insert({
        unit: unit,
        quantity: currentQuantity(spaceId),
        startAtDate: currentDate(spaceId),
        startAtHour: currentHour(spaceId),
        startAtMinute: currentMinute(spaceId),
        productId: spaceId,
        cartId: 'required-for-simple-schema'
      }, function(error, lineItemId) {
        if(error) {
          event.target.disabled = false;

          throwError(error.message)
        } else {
          insertSuccess(lineItemId)
        }
      })
    } else if(unit === DAY) {
      Mart.LineItems.insert({
        unit: unit,
        quantity: currentQuantity(spaceId),
        startAtDate: currentDate(spaceId),
        startAtHour: -1,
        startAtMinute: -1,
        productId: spaceId,
        cartId: 'required-for-simple-schema'
      }, function(error, lineItemId) {
        if(error) {
          event.target.disabled = false;

          throwError(error.message)
        } else {
          insertSuccess(lineItemId)
        }
      })
    } else if(unit === MONTH) {
      Mart.LineItems.insert({
        unit: unit,
        quantity: 1,
        startAtDate: currentDate(spaceId),
        startAtHour: -1,
        startAtMinute: -1,
        productId: spaceId,
        cartId: 'required-for-simple-schema'
      }, function(error, lineItemId) {
        if(error) {
          event.target.disabled = false;

          throwError(error.message)
        } else {
          insertSuccess(lineItemId)
        }
      })
    } else {
     throwError("Must select a docking period.")
    }
  }
});

var insertSuccess = function(lineItemId) {
  sAlert.success("Item added to cart.")
  $('.modal').on('hidden.bs.modal', function (e) {
    Meteor.setTimeout(function(spaceId) {
      FlowRouter.go(dockPath(lineItemId))
    }, 10)
  })
  $(".modal").modal('hide')
}

var currentUnit = function(spaceId) {
  return Session.get(unitSessionId(spaceId))
}

var currentQuantity = function(spaceId) {
  var unit = Session.get(unitSessionId(spaceId))
  if(!unit)
    return

  if(unit === HOUR) {
    return Session.get(spaceNumHoursId(spaceId))
  } else if(unit === DAY) {
    return Session.get(spaceNumDaysId(spaceId))
  } else if(unit === MONTH) {
    return 1
  }
}

var currentDate = function(spaceId) {
  // console.log('currentDate');
  // console.log(spaceId);
  return Session.get(spaceDateId(spaceId))
}

var currentHour = function(spaceId) {
  var unit = Session.get(unitSessionId(spaceId))
  if(!unit)
    return

  if(unit === HOUR) {
    var hour = parseInt(Session.get(spaceStartHourId(spaceId)))
    var ampm = Session.get(spaceStartAMPMId(spaceId))

    // convert into 24H
    if(ampm === PM) {
      if(hour !== 12)
        hour = hour + 12
    } else if((ampm === "AM") && (hour === 12)) {
      hour = "00"
    }


    return hour

  } else if(unit === DAY) {
    return 0 // required for autoform
  } else if(unit === MONTH) {
    return 0 // required for autoform
  }
}

var currentMinute = function(spaceId) {
  var unit = Session.get(unitSessionId(spaceId))
  if(!unit)
    return

  if(unit === HOUR) {
    return Session.get(spaceStartMinuteId(spaceId))
  } else if(unit === DAY) {
    return 0 // required for autoform
  } else if(unit === MONTH) {
    return 0 // required for autoform
  }
}

var currentAMPM = function(spaceId) {
  var unit = Session.get(unitSessionId(spaceId))
  if(!unit)
    return

  if(unit === HOUR) {
    return Session.get(spaceStartAMPMId(spaceId))
  } else if(unit === DAY) {
    return "AM" // required for autoform
  } else if(unit === MONTH) {
    return "AM" // required for autoform
  }
}
