Template.managePropertyImage.events({
  "click .manage-property-image-button": function(event, template) {
    console.log('click');
    var inputs = template.$('.property-image-upload')

    if(inputs && inputs[0] && inputs[0].files && inputs[0].files[0]) {
      var file = inputs[0].files[0]
      var index = template.data.index

      uploadImageVersions(file, "Properties", index, true, function(error, imageUrls) {
        if(error) {
          // console.log(error);
          sAlert.error(error)
        } else {
          console.log('imageUrls');
          console.log(imageUrls);
          var selector = {
            objectCollection: "Storefronts",
            objectId: template.data.propertyId,
            index: template.data.index
          }
          console.log('selector');
          console.log(selector);
          var existingImage = Mart.Images.findOne(selector)
          console.log(existingImage);
          if(existingImage) {
            console.log('existing image');
            Mart.Images.update(existingImage._id, {$set: imageUrls})
          } else {
            console.log('new image');
            Mart.Images.insert(_.extend(selector, imageUrls))
          }
        }
      })
    }
  }
});
