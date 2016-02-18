Template.newSpace.events({
  "click #new-space-button": function(event, template) {
    console.log('click');
    $("#newSpaceForm").submit()
  }
});
