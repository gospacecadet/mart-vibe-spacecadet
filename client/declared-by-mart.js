Template.registerHelper("loggedIn", function (propertyId) {
  return true;
})

Template.navbarLoggedInLinks.helpers({
  cartHasItems: function() {
    return true;
  },
  canActAsMerchant: function() {
    return true;
  },
  isMerchant: function() {
    return true;
  }
});
