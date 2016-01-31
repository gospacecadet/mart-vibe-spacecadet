Template.myProfileAvatar.events({
  "click .my-avatar-button": function(event, template) {
    var inputs = template.$('.my-avatar-img')

    if(inputs && inputs[0] && inputs[0].files && inputs[0].files[0]) {
      var file = inputs[0].files[0]

      var uploader = new Slingshot.Upload('ProfileAvatars')

      MY_PROFILE_AVATAR_UPLOADER.set(uploader)

      resizeImage(file, {
        maxWidth: 150,
        // minWidth: 1000,
        maxHeight: 150,
        crop: true,
        canvas: true
      }, function(error, blob) {
        uploader.send(blob, function(error, downloadUrl) {
          if(error) {
            sAlert.error(error.message)
          } else {
            Meteor.users.update(Meteor.userId(),
              {$set: {"profile.avatarUrl": downloadUrl}}, function(error, userId) {
                if(error)
                  sAlert.error("Could not set image. Please try again later.")

                sAlert.success("Image uploaded")
              })
          }
        })
      })


    }
  }
});
