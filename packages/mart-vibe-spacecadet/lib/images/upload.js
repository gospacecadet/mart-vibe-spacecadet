uploadImageVersions = function(blob, objectCollection, index, callback) {
  var directiveEndings = ['Original', 'Optimized', 'Thumbnail']
  var imageUrls = {}

  _.each(directiveEndings, function(ending) {
    var directiveName = objectCollection + ending
    var uploader = new Slingshot.Upload(directiveName, {index: index})

    // Add uploader to global reactive var
    var uploaders = TMP_PROPERTY_UPLOADERS.get()
    uploaders[index] = uploader
    TMP_PROPERTY_UPLOADERS.set(uploaders)

    uploader.send(blob, function(error, downloadUrl) {
      if(error) {
        callback(error)
      } else {
        var key = ending.toLowerCase() + "Url"
        imageUrls[key] = downloadUrl
        if(_.keys(imageUrls).length === 3) {
          console.log(imageUrls);
          callback(undefined, imageUrls)
        }
      }
    })
  })
}

attachUploadedImages = function(type, objectId) {
  for(let i = 1; i <= NUM_IMAGES_ALLOWED; i++) {
    var sessionIdLookup
    var objectCollection

    if(type === "Properties") {
      sessionIdLookup = propertyUploadedImageId
      objectCollection = "Storefronts"
    } else if(type === "Spaces") {
      sessionIdLookup = spaceUploadedImageId
      objectCollection = "Products"
    }

    var imageUrls = Session.get(sessionIdLookup(i))
    console.log(imageUrls);
    if(imageUrls) {
      var selector = {
        objectCollection: objectCollection,
        objectId: objectId,
        index: i
      }

      var image = Mart.Images.findOne(selector)
      if(image) {
        Mart.Images.update(image._id, {$set: imageUrls})
      } else {
        Mart.Images.insert(_.extend(imageUrls, selector))
      }
    }
  }
}
