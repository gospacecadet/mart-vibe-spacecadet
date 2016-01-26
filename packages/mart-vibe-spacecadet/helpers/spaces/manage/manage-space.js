Template.manageSpace.helpers({
  canPublishSpace: function() {
    var onePrice = Mart.Prices.findOne({
      productId: this._id,
    })

    var oneImage = Mart.Images.findOne({
      objectCollection: "Products",
      objectId: this._id
    })

    return onePrice && oneImage
  }
});
