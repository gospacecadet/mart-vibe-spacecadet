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
    return monthNums
  },
  dailyNums: function() {
    return dayNums
  },
  // Must be 18 to play
  dobYears() {
    var now = 2016
    return _.map(buildFullArray(now - 121, now - 18), year => {
      return {value: year, label: year}
    })
  },
  dobMonths() {
    return [
      {value: 1, label: "January"},
      {value: 2, label: "February"},
      {value: 3, label: "March"},
      {value: 4, label: "April"},
      {value: 5, label: "May"},
      {value: 6, label: "June"},
      {value: 7, label: "July"},
      {value: 8, label: "August"},
      {value: 9, label: "September"},
      {value: 10, label: "October"},
      {value: 11, label: "November"},
      {value: 12, label: "December"},
    ]
  },
  dobDays() {
    return _.map(dayNums, day => {
      return {value: day, label: day}
    })
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

var monthNums = [1,2,3,4,5,6,7,8,9,10,11,12]
var dayNums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30, 31
]
