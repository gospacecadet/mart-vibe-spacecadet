var helpers = {
  productThumbnailUrl: function(_id) {
    return IFOAR({objectCollection: "Products", objectId: _id}, "thumbnailUrl")
  },
  storefrontThumbnailUrl: function(_id) {
    return IFOAR({objectCollection: "Storefronts", objectId: _id}, "thumbnailUrl")
  },
  storefrontImageUploadUrl: function() {

  },
  numImagesAllowed: function() {
    return buildArray(NUM_IMAGES_ALLOWED)
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
