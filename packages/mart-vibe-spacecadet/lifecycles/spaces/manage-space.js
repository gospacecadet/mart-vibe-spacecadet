Template.manageSpaceEditPrice.onCreated(function() {
  var unit = Template.currentData().unit
    var hooksObject = {
      onSubmit: function(insertDoc) {
        var hook = this

        var price = Mart.Prices.findOne({
          unit: insertDoc.unit,
          productId: insertDoc.productId,
        })

        if(price) {
          Mart.Prices.update(price._id, {$set: {
            priceInCents: parseInt(insertDoc.priceInDollars * 100)
          }}, function(error, priceId) {
            if(error) {
              hook.done(error)
            } else {
              sAlert.success("Price added")
              hook.done()
            }
          })
        } else {
          Mart.Prices.insert({
            unit: insertDoc.unit,
            productId: insertDoc.productId,
            priceInCents: parseInt(insertDoc.priceInDollars * 100)
          }, function(error, priceId) {
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
    AutoForm.addHooks([spaceManagePriceId(unit)], hooksObject);
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
  var property = Mart.Storefronts.findOne(this.data.storefrontId);
  var permitted = canManageProperty(property)
  if(!permitted)
    forbid()
})
