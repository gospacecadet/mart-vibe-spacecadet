var helpers = {
  truncateText: function(text, length) {
    text = text || "Loading..."
    if(text.length > length) {
      text = text.substring(0, length);
      text = text.replace(/\w+$/, '');
      text = text + "..."
    }

    return text
  },
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
