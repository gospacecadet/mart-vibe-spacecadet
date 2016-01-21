// Find One And Return
// Find by selector and if exists, return attribute
var IFOAR = function(selector, attribute) {
  return FOAR(Mart.Images, selector, attribute)
}

var FOAR = function(Kollection, selector, attribute) {
  var obj = Kollection.findOne(selector)
  if(obj)
    return obj[selector]
}
