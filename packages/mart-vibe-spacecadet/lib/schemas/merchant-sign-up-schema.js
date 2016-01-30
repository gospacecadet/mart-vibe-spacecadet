MerchantSignUpSchema = new SimpleSchema({
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
  firstName: {
    type: String
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String
  },
  businessName: {
    type: String,
    optional: true,
  },
})
