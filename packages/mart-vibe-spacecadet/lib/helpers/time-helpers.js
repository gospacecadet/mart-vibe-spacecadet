var helpers = {
  HOUR: function() {
    return HOUR
  },
  DAY: function() {
    return DAY
  },
  MONTH: function() {
    return MONTH
  },
  hours: function() {
    return [
      {name: "1", value: 1},
      {name: "2", value: 2},
      {name: "3", value: 3},
      {name: "4", value: 4},
      {name: "5", value: 5},
      {name: "6", value: 6},
      {name: "7", value: 7},
      {name: "8", value: 8},
      {name: "9", value: 9},
      {name: "10", value: 10},
      {name: "11", value: 11},
      {name: "12", value: 0},
    ]  },
  minutes: function() {
    return [
      {name: "00", value: 0},
      {name: "15", value: 15},
      {name: "30", value: 30},
      {name: "45", value: 45},
    ]  },
  duration: function() {
    return this.quantity + " " + this.unit + "s"
  },
  dateAgo: function(date) {
    return moment(date).fromNow()
  },
  dateSpecific: function(date) {
    return moment(date).format('lll')
  },
  dateSlashed: function(date) {
    return moment(date).format('ll')
  },
  monthlyNums: function() {
    return [1,2,3,4,5,6,7,8,9,10,11,12]
  },
  dailyNums: function() {
    return [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,12,13,14,15,16,17,18,19,20,
      21,22,23,24,25,26,27,28,29,30, 31
    ]
  },
  // Must be 18 to play
  dobYears: function() {
    var now = 2016
    return buildFullArray(now - 121, now - 18)
  },
  hourlyNums: function() {
    return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  },
  ampm: function() {
    return [
      {name: AM, value: AM},
      {name: PM, value: PM},
    ]
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
