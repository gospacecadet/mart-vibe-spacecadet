STYLES = {
  BOXED: "BOXED",
  SETTINGS: "SETTINGS"
}

Template.mainLayout.helpers({
  wBoxedStyle: function() {
    return this.style() === STYLES.BOXED
  },
  wSettingsStyle: function() {
    return this.style() === STYLES.SETTINGS
  },
  wDefaultStyle: function() {
    var style = this.style()
    return !_.find(STYLES, function(v, k) {
      return style === v
    })
  }
});
