Template.manageSpaceEditPrice.onCreated(function() {
  var unit = Template.currentData().unit
    var hooksObject = {
      onSubmit: function(insertDoc) {
        console.log('onSubmit');
        var hook = this

        var price = {
          unit: insertDoc.unit,
          productId: insertDoc.productId,
        }

        var existingPrice = Mart.Prices.findOne(price)

        var pricing = {priceInCents: parseInt(insertDoc.priceInDollars * 100)}

        console.log(insertDoc.depositInDollars);
        if(insertDoc.depositInDollars)
          _.extend(pricing, {depositInCents: parseInt(insertDoc.depositInDollars * 100)})

        console.log(pricing);
        if(existingPrice) {
          console.log('existingPrice');
          Mart.Prices.update(existingPrice._id, {$set: pricing}, function(error, priceId) {
            if(error) {
              hook.done(error)
            } else {
              sAlert.success("Price added")
              hook.done()
            }
          })
        } else {
          _.extend(price, pricing)

          Mart.Prices.insert(price, function(error, priceId) {
            if(error) {
              hook.done(error)
            } else {
              sAlert.success("Price added")
              hook.done()
            }
          })
        }
        return false
      },
    };
    AutoForm.addHooks(spaceManagePriceId(unit), hooksObject, true);
    AutoForm.addHooks(spaceManagePriceId(unit), MeteorErrorHook, true);
})

Template.manageSpace.onCreated(function() {
  MANAGE_SPACE_UPLOADERS = new ReactiveVar({})
  var template = this
  Tracker.autorun(function() {
    var spaceId = FlowRouter.getParam('spaceId')
    template.subscribe("mart/product", spaceId);
  });
})

Template.manageSpaceForbid.onCreated(function() {
  var propertyId = FlowRouter.getParam('propertyId')
  console.log(propertyId);
  var property = Mart.Storefronts.findOne(propertyId);
  var permitted = canManageProperty(property)
  if(!permitted)
    forbid()
})
