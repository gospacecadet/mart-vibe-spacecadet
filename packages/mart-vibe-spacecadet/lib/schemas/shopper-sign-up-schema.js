ShopperSignUpSchema = new SimpleSchema({
  firstName: {
    type: String
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    min: 8,
  },
  passwordConfirmation: {
    type: String,
    min: 8,
    label: "Password Confirmation",
    custom: function() {
      if (this.value !== this.field('password').value) {
        return "passwordMissmatch";
      }
    }
  },
  termsAccepted: {
    type: Boolean,
    allowedValues: [true]
  },
})
