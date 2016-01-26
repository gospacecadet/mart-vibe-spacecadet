Template.newSpaceImage.helpers({
  uploading: function() {
    return pct(this.index) > 1
  },
  progress: function() {
    return pct(this.index)
  },
  previewUrl: function() {
    var uploader = currentUploader(this.index)
    if(uploader && uploader.url(true))
      return uploader.url(true)
  }
});

var pct = function(index) {
  console.log('pct');
  console.log(index);
  if(currentUploader(index) && currentUploader(index).progress) {
    var uploader = currentUploader(index)
    var pct = Math.round(uploader.progress() * 100)
    console.log(pct);
    return pct
  }
}

var currentUploader = function(index) {
  if(NEW_SPACE_UPLOADERS) {
    var uploaders = NEW_SPACE_UPLOADERS.get()
    if(!!uploaders && !!uploaders[index])
      return uploaders[index]
  }
}
