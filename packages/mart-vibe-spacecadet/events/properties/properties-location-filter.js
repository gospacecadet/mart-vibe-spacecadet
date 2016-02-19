Template.propertiesLocationFilter.events({
  "click .location-filter": function(event, template) {
     event.preventDefault()

     var city = template.data.city;

     Session.set('location-filter', city)
  }
});
