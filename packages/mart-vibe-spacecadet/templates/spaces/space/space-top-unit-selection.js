var units = [
  {name: HOUR, id: "#hourly-price"},
  {name: DAY, id: "#daily-price"},
  {name: MONTH, id: "#monthly-price"}
]

Template.spaceTopUnitSelection.events({
  "click #hourly-price": function(event, template) {
     event.preventDefault()
     Session.set(unitSessionId(this._id), HOUR)
  },
  "click #daily-price": function(event, template) {
     event.preventDefault()
     Session.set(unitSessionId(this._id), DAY)
  },
  "click #monthly-price": function(event, template) {
     event.preventDefault()
     Session.set(unitSessionId(this._id), MONTH)
  },
});

// Set to daily price by default if it exist. Otherwise set to first available price
Template.spaceTopUnitSelection.onCreated(function() {
  var template = this
  Tracker.autorun(function(){
    var spaceId = template.data._id
    var price = Mart.Prices.findOne({productId: spaceId, unit: DAY})

    if(!price)
      price = Mart.Prices.findOne({productId: spaceId})

    if(price)
      Session.setDefault(unitSessionId(spaceId), price.unit)
  });

})

Template.spaceTopUnitSelection.helpers({
  activeUnitClass: function(unit) {
    let activeClass = 'unit-active'
    if(unit === Session.get(unitSessionId(this._id))) {
      return activeClass
    }
  }
});
