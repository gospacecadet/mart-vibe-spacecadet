var helpers = {
  propertyPath: function(propertyId) {
    return FlowRouter.path('property', {propertyId: propertyId})
  },
  managePropertyPath: function(propertyId) {
    return managePropertyPath(propertyId)
  },
  managePropertiesPath: function() {
    return managePropertiesPath()
  },
  newPropertyPath: function() {
    return FlowRouter.path('newProperty')
  },
  spacePath: function(spaceId, propertyId) {
    return FlowRouter.path('space', {spaceId: spaceId, propertyId: propertyId})
  },
  manageSpacePath: function(spaceId, propertyId) {
    return FlowRouter.path('manageSpace', {spaceId: spaceId, propertyId: propertyId})
  },
  newSpacePath: function(propertyId) {
    return newSpacePath(propertyId)
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})

managePropertyPath = function(propertyId) {
  return FlowRouter.path('manageProperty', {propertyId: propertyId})
}

newSpacePath = function(propertyId) {
  return FlowRouter.path('newSpace', {propertyId: propertyId})
}

managePropertiesPath = function() {
  return FlowRouter.path('manageProperties')
}
