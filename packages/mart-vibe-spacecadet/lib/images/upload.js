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

    if(ending === "Original") {
      upload(blob, uploader, imageUrls, ending, callback)
    } else if(ending === "Optimized") {
      // Resize and upload as optimized
       resizeImage(blob, {
         maxWidth: 1000,
         // minWidth: 1000,
         maxHeight: 300,
         crop: true,
         canvas: true
       }, function(error, blob) {
         upload(blob, uploader, imageUrls, ending, callback)
       })
    } else if(ending === "Thumbnail") {
      // Resize and upload as thumbnail
      resizeImage(blob, {
        maxWidth: 300,
        // minWidth: 300,
        maxHeight: 200,
        crop: true,
        canvas: true
      }, function(error, blob) {
        upload(blob, uploader, imageUrls, ending, callback)
      })
    }
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

var upload = function(blob, uploader, imageUrls, ending, callback) {
  uploader.send(blob, function(error, downloadUrl) {
    if(error) {
      callback(error)
    } else {
      var key = ending.toLowerCase() + "Url"
      imageUrls[key] = downloadUrl
      if(_.keys(imageUrls).length === 3) {
        callback(undefined, imageUrls)
      }
    }
  })
}

// return blob
var resizeImage = function(file, options, callback) {
  var fileData = {
    name: file.name,
    type: file.type
  };

  // Get image metadata.
  loadImage.parseMetaData(file, function(data) {
    var orientation = 1;
    if (data.exif) {
      orientation = data.exif.get('Orientation');
      if (orientation) {
        options.orientation = orientation;
      }
    }

    // Resize image with orientation metadata.
    loadImage(file, function(canvas) {
      console.log('LOAD IMAGE');
      console.log(canvas);
      canvas.toBlob(function(blob) {
        fileData.data = blob
        fileData.data.type = file.type;

        var resizedImage = _.extend(fileData.data, {name: fileData.name}, data.exif ? data.exif.getAll() : {});
        callback(null, resizedImage)
      }, file.type, Mart.Image.ImageQuality)
    }, options);

  },
  {
    maxMetaDataSize: 262144,
    disableImageHead: false
  });
}

Meteor.startup(function(){
  if( !HTMLCanvasElement.prototype.toBlob ) {
    Object.defineProperty( HTMLCanvasElement.prototype, 'toBlob', {
        value: function( callback, type, quality ) {
            const bin = atob( this.toDataURL( type, quality ).split(',')[1] ),
                  len = bin.length,
                  len32 = len >> 2,
                  a8 = new Uint8Array( len ),
                  a32 = new Uint32Array( a8.buffer, 0, len32 );

            for( var i=0, j=0; i < len32; i++ ) {
                a32[i] = bin.charCodeAt(j++)  |
                    bin.charCodeAt(j++) << 8  |
                    bin.charCodeAt(j++) << 16 |
                    bin.charCodeAt(j++) << 24;
            }

            let tailLength = len & 3;

            while( tailLength-- ) {
                a8[ j ] = bin.charCodeAt(j++);
            }

            callback( new Blob( [a8], {'type': type || 'image/png'} ) );
        }
    });
  }
});
