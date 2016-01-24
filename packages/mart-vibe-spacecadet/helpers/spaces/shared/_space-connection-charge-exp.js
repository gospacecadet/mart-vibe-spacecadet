Template._spaceConnectionChargeExp.helpers({
  connectionCharge: function() {
    return Math.floor(connectionRateForUnit(this.unit) * this.priceInDollars * 100) / 100
  },
  landlordCut: function() {
    return Math.ceil((1.0 - connectionRateForUnit(this.unit)) * this.priceInDollars * 100) / 100
  },
  connectionChargeRate: function() {
    return parseInt(connectionRateForUnit(this.unit) * 10000) / 100
  }
});

var connectionRateForUnit = function(unit) {
  if(unit === HOUR) {
    return Meteor.settings.public.HOUR_CONNECTION_FEE_PCT
  } else if(unit === DAY) {
    return Meteor.settings.public.DAY_CONNECTION_FEE_PCT
  } else if(unit === MONTH) {
    return Meteor.settings.public.MONTH_CONNECTION_FEE_PCT
  }
}
