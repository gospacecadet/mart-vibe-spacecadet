Template.registerHelper("productThumbnailUrl", function (_id) {
  var image = Mart.Images.findOne({objectCollection: "Products", objectId: _id})
  if(image)
    return image.thumbnailUrl
})

Template.registerHelper("storefrontThumbnailUrl", function (_id) {
  var image = Mart.Images.findOne({objectCollection: "Storefronts", objectId: _id})
  if(image)
    return image.thumbnailUrl
})
