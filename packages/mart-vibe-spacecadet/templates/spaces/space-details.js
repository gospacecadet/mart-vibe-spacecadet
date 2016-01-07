// const DETAILS = "details"
// const LOCATION = "location"
// const REVIEWS = "reviews"
// const DETAILS_SESSION_PREFIX = "details"
// var detailsSession = function(propertyId) {
//   return DETAILS_SESSION_PREFIX + propertyId
// }
//
// Template.spaceDetails.events({
//   "click #details-details": function(event, template) {
//     event.preventDefault()
//     Session.set(detailsSession(this.propertyId), DETAILS)
//     $(event.target).tab('show')
//   },
//   "click #details-location": function(event, template) {
//     event.preventDefault()
//     Session.set(detailsSession(this.propertyId),LOCATION)
//     $(event.target).tab('show')
//   },
//   "click #details-reviews": function(event, template) {
//     event.preventDefault()
//     Session.set(detailsSession(this.propertyId), REVIEWS)
//     $(event.target).tab('show')
//   },
// });
//
// Template.spaceDetails.helpers({
//   detailsSelected: function() {
//     return Session.get(detailsSession(this.propertyId)) === DETAILS
//   },
//   locationSelected: function() {
//     return Session.get(detailsSession(this.propertyId)) === LOCATION
//   },
//   reviewsSelected: function() {
//     return Session.get(detailsSession(this.propertyId)) === REVIEWS
//   }
// });
//
//
// Template.spaceDetails.onCreated(function() {
//   Session.setDefault(detailsSession(this.propertyId), DETAILS)
// });
