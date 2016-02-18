Template.myProfileAvatar.helpers({
  previewUrl: function() {
    var uploader = _uploader()
    if(uploader && uploader.url(true))
      return uploader.url(true)

    return _avatarUrl(Meteor.userId())
  },
  uploading: function() {
    return pct() > 1
  },
  progress: function() {
    return pct()
  },
});

var pct = function() {
  var uploader = _uploader()
  if(uploader && uploader.progress) {
    var pct = Math.round(uploader.progress() * 100)
    return pct
  }
}

var _uploader = function() {
  return MY_PROFILE_AVATAR_UPLOADER.get()
}
