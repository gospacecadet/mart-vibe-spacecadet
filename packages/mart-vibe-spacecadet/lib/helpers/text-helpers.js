var helpers = {
  truncateText: function(text, length) {
    text = text || "Loading..."
    if(text.length > length) {
      text = text.substring(0, length);
      text = text.replace(/\w+$/, '').replace(/^\s+|\s+$/g, '');
      text = text + "..."
    }

    return text
  },
  learnTip() {
    return "We've made it easy to avoid late fees as a renter, and eliminate the hassle of reminders as a landlord. Every month the rental transaction will process automatically, and to cancel it's as easy as one-click in your Docking History page."
  }
}

_.each(helpers, function(helper, name) {
  Template.registerHelper(name, helper)
})
