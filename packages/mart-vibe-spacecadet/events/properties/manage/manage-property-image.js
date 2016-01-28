Template.managePropertyImage.events({
  "click .manage-property-image-button": function(event, template) {
    var inputs = template.$('.property-image-upload')

    if(inputs && inputs[0] && inputs[0].files && inputs[0].files[0]) {
      var file = inputs[0].files[0]
      var index = template.data.index
      var propertyId = template.data.propertyId

      uploadImageVersions(file, "Properties", propertyId, index, true, function(error, imageUrls) {
        if(error) {
          sAlert.error(error)
        } else {
          var selector = {
            objectCollection: "Storefronts",
            objectId: template.data.propertyId,
            index: template.data.index
          }

          console.log('goint to upload');
          console.log(selector);
          var existingImage = Mart.Images.findOne(selector)
          if(existingImage) {
            console.log('existing image'); 
            console.log(imageUrls);
            Mart.Images.update(existingImage._id, {$set: imageUrls})
          } else {
            var image = _.extend(selector, imageUrls)
            console.log('new image');
            console.log(image);
            Mart.Images.insert(_.extend(selector, image))
          }
        }
      })
    }
  }
});
