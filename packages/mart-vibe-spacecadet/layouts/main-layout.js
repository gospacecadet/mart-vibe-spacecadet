STYLES = {
  BOXED: "BOXED",
  SETTINGS: "SETTINGS"
}

Template.mainLayout.helpers({
  wBoxedStyle: function() {
    if(this.style)
      return this.style() === STYLES.BOXED
  },
  wSettingsStyle: function() {
    if(this.style)
      return this.style() === STYLES.SETTINGS
  },
  wDefaultStyle: function() {
    return !this.style
  }
});
