Template.manageSpaceImage.events({
  "click .manage-space-image-button": function(event, template) {
    var inputs = template.$('.space-image-upload')
    console.log('upload');

    if(inputs && inputs[0] && inputs[0].files && inputs[0].files[0]) {
      var file = inputs[0].files[0]
      var index = template.data.index
      var spaceId = template.data.spaceId
      console.log(spaceId);
      console.log(index);
      uploadImageVersions(file, "Spaces", spaceId, index, true, function(error, imageUrls) {
        console.log('uploadImageVersions');
        console.log(imageUrls);
        if(error) {
          sAlert.error(error)
        } else {
          var selector = {
            objectCollection: "Products",
            objectId: spaceId,
            index: template.data.index
          }

          var existingImage = Mart.Images.findOne(selector)
          if(existingImage) {
            Mart.Images.update(existingImage._id, {$set: imageUrls})
          } else {
            Mart.Images.insert(_.extend(selector, imageUrls))
          }
        }
      })
    }
  }
});
