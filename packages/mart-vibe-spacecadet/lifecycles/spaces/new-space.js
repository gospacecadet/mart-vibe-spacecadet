Template.newSpace.onCreated(function() {
  NEW_SPACE_UPLOADERS = new ReactiveVar({})
  NEW_SPACE_PRICES = new ReactiveVar([
    {unit: Mart.Product.UNITS.HOUR},
    {unit: Mart.Product.UNITS.DAY},
    {unit: Mart.Product.UNITS.MONTH}
  ])
})
