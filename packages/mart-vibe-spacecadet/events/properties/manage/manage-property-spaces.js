Template.managePropertySpaces.events({
  "click #manage-property-add-space": function(event, template){
    FlowRouter.go(newSpacePath(template.data._id))
  }
});
