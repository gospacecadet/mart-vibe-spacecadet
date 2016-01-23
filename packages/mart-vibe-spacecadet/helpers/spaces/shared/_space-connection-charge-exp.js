Template._spaceConnectionChargeExp.helpers({
  connectionCharge: function() {
    return connectionRateForUnit(this.unit) * this.priceInCents
  },
  landlordCut: function() {
    return (1 - connectionRateForUnit(this.unit)) * this.priceInCents
  },
  connectionChargeRate: function() {
    return parseInt(connectionRateForUnit(this.unit) * 10000) / 100
  }
});

var decToPct = function(dec) {
  return parseInt(dec * 10000) / 100
}

var connectionRateForUnit = function(unit) {
  if(unit === HOUR) {
    return decToPct(Meteor.settings.HOUR_CONNECTION_FEE_PCT)
  } else if(unit === DAY) {
    return decToPct(Meteor.settings.DAY_CONNECTION_FEE_PCT)
  } else if(unit === MONTH) {
    return decToPct(Meteor.settings.MONTH_CONNECTION_FEE_PCT)
  }
}
