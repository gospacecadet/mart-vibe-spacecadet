Template.newPropertyImage.events({
  "click .upload-property-image-button": function(event, template) {
    var inputs = template.$('.property-image-upload')

    if(inputs && inputs[0] && inputs[0].files && inputs[0].files[0]) {
      var file = inputs[0].files[0]
      var index = template.data.index

      uploadImageVersions(file, "Properties", index, function(error, imageUrls) {
        if(error) {
          // console.log(error);
          sAlert.error(error)
        } else {
          Session.set(propertyUploadedImageId(index), imageUrls)
        }
      })
    }
  }
});
