Template.newSpace.onCreated(function() {
  NEW_SPACE_UPLOADERS = new ReactiveVar({})
  NEW_SPACE_PRICES = new ReactiveVar([
    {unit: Mart.Product.UNITS.HOUR},
    {unit: Mart.Product.UNITS.DAY},
    {unit: Mart.Product.UNITS.MONTH}
  ])
  this.subscribe("mart/storefronts");
})

Template.newSpaceForbid.onCreated(function() {
  var propertyId = FlowRouter.getParam('propertyId')
  console.log(propertyId);
  var property = Mart.Storefronts.findOne(propertyId);
  var permitted = canManageProperty(property)
  if(!permitted)
    forbid()
})
