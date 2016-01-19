Template.registerHelper("money", function (priceInCents) {
  return accounting.formatMoney(priceInCents/100)
})

Template.registerHelper("dollars", function (priceInCents) {
  return accounting.formatMoney(priceInCents/100, "$", 0)
})

Template.registerHelper("numImagesAllowed", function() {
  return [ {index: 1}, {index: 2}, {index: 3},{index: 4} ]
});

Template.registerHelper("truncateText", function(text, length) {
  text = text || "Loading..."
  if(text.length > length) {
    text = text.substring(0, length);
    text = text.replace(/\w+$/, '');
    text = text + "..."
  }

  return text
});

Template.registerHelper("notEmpty", function(cursor) {
  return cursor.count() > 0
});
