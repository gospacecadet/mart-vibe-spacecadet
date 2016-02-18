PasswordUpdateSchema = new SimpleSchema({
  oldPassword: {
    type: String,
  },
  newPassword: {
    type: String,
    min: 8,
  },
  newPasswordConfirmation: {
    type: String,
    min: 8,
    label: "Password Confirmation",
    custom: function() {
      if (this.value !== this.field('newPassword').value) {
        return "passwordMissmatch";
      }
    }
  },
});
