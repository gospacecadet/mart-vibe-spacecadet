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
    return [ {index: 1}, {index: 2}, {index: 3},{index: 4} ]
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
