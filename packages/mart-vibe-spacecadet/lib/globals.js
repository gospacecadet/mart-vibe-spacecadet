// Find One And Return
// Find by selector and if exists, return attribute
IFOAR = function(selector, attribute) {
  return FOAR(Mart.Images, selector, attribute)
}

PFOAR = function(selector, attribute) {
  return FOAR(Mart.Storefronts, selector, attribute)
}


FOAR = function(Kollection, selector, attribute) {
  var obj = Kollection.findOne(selector)
  if(obj)
    return obj[attribute]
}

buildArray = function(end) {
  var a = []
  for(let i = 1; i<= end; i++) {
    a.push(i)
  }

  return a
}

// Builds array [start, ..., end]
// Inclusive of both start and end
buildFullArray = function(start, end) {
  var a = []
  for(let i = start; i<= end; i++) {
    a.push(i)
  }

  return a
}

SimpleSchema.messages({
  passwordMissmatch: "Passwords do not match"
})
