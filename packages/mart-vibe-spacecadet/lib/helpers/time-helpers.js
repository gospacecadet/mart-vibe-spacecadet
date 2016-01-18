Template.registerHelper("HOUR", function () {
  return HOUR
})

Template.registerHelper("DAY", function () {
  return DAY
})

Template.registerHelper("MONTH", function () {
  return MONTH
})

Template.registerHelper("hours", function () {
  return [
    {name: "12", value: 0},
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
  ]
})

Template.registerHelper("minutes", function () {
  return [
    {name: "00", value: 0},
    {name: "15", value: 15},
    {name: "30", value: 30},
    {name: "45", value: 45},
  ]
})

Template.registerHelper("ampm", function () {
  return [
    {name: "AM", value: "am"},
    {name: "PM", value: "pm"},
  ]
})

Template.registerHelper("hourlyNums", function () {
  return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
})

Template.registerHelper("dailyNums", function () {
  return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
})

Template.registerHelper("monthlyNums", function () {
  return [1,2,3,4,5,6,7,8,9,10,11,12]
})

Template.registerHelper("dateSlashed", function (date) {
  return moment(date).format('ll')
})

Template.registerHelper("dateAgo", function (date) {
  return moment(date).fromNow()
})
