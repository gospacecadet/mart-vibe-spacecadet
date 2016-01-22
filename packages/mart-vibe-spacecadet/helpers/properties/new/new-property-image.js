Template.newPropertyImage.helpers({
  uploading: function() {
    return pct(this.index) > 1
  },
  progress: function() {
    return pct(this.index)
  }
});

var pct = function(index) {
  var uploaders = TMP_PROPERTY_UPLOADERS.get()
  if(uploaders && uploaders[index] && uploaders[index].progress) {
    var uploader = uploaders[index]
    var pct = Math.round(uploader.progress() * 100)
    return pct
  }
}
