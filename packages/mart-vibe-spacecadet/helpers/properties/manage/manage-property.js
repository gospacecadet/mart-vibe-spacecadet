Template.managePropertyForm.helpers({
  canPublishProperty: function() {
    var oneImage = Mart.Images.findOne({
      objectCollection: "Storefronts",
      objectId: this._id
    })

    var oneProduct = Mart.Products.findOne({
      storefrontId: this._id,
      isPublished: true,
      isDeleted: false
    })

    return oneImage && oneProduct
  }
});
