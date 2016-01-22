// Find One And Return
// Find by selector and if exists, return attribute
IFOAR = function(selector, attribute) {
  return FOAR(Mart.Images, selector, attribute)
}

FOAR = function(Kollection, selector, attribute) {
  var obj = Kollection.findOne(selector)
  if(obj)
    return obj[selector]
}

buildArray = function(end) {
  var a = []
  for(let i = 1; i<= end; i++) {
    a.push(i)
  }

  return a
}
