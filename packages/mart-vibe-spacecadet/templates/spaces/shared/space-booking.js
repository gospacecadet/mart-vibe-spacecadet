Template.spaceBooking.helpers({
  spaceBookingModal: function() {
    return "space-booking-modal-" + this._id
  },
});

Template.spaceBookingForm.helpers({
  currentUnit: function() {
    return Session.get(unitSessionId(this._id))
  },
  currentQuantity: function() {
    var unit = Session.get(unitSessionId(this._id))
    if(!unit)
      return

    if(unit === HOUR) {
      return Session.get(spaceNumHoursId(this._id))
    } else if(unit === DAY) {
      return Session.get(spaceNumDaysId(this._id))
    } else if(unit === MONTH) {
      return 1
    }
  },
  currentDate: function() {
    return Session.get(spaceDateId(this._id))
  },
  currentHour: function() {
    var unit = Session.get(unitSessionId(this._id))
    if(!unit)
      return

    if(unit === HOUR) {
      var hour = Session.get(spaceStartHourId(this._id))
      var ampm = Session.get(spaceStartAMPMId(this._id))

      // convert into 24H
      if(ampm === PM)
        hour = hour + 12

      return hour

    } else if(unit === DAY) {
      return 0 // required for autoform
    } else if(unit === MONTH) {
      return 0 // required for autoform
    }
  },
  currentMinute: function() {
    var unit = Session.get(unitSessionId(this._id))
    if(!unit)
      return

    if(unit === HOUR) {
      return Session.get(spaceStartMinuteId(this._id))
    } else if(unit === DAY) {
      return 0 // required for autoform
    } else if(unit === MONTH) {
      return 0 // required for autoform
    }
  },
  currentAMPM: function() {
    var unit = Session.get(unitSessionId(this._id))
    if(!unit)
      return

    if(unit === HOUR) {
      return Session.get(spaceStartAMPMId(this._id))
    } else if(unit === DAY) {
      return "AM" // required for autoform
    } else if(unit === MONTH) {
      return "AM" // required for autoform
    }
  },
  spaceBookingFormId: function() {
    return "insertLineItemForm" + this._id
  }
});

Template.spaceBookingForm.onCreated(function() {
  var spaceId = Template.currentData()._id
  var hooksObject = {
    onSubmit: function(insertDoc, updateDoc, currentDoc) {
      var hook = this
      console.log(insertDoc);
      Mart.LineItems.insert(insertDoc, function(error, lineItemId) {
        if(error) {
          console.log(error);
          throwError(error.message)
        } else {
          sAlert.success("Item added to cart")
          $(".modal").modal('hide')
          $('.modal').on('hidden.bs.modal', function (e) {
            Meteor.setTimeout(function() {
              FlowRouter.go(dockPath())
            }, 10)
          })

        }
        hook.done()
      })
      return false
    },
    onError: function(operation, error) {
      // console.log(error);
      if(error && error.message) { // a special Meteor.error
        throwError(error.message)
      }
    }
  };
  AutoForm.addHooks(['insertLineItemForm' + spaceId], hooksObject);
})
