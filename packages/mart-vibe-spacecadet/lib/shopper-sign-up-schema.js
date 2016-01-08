ShopperSignUpSchema = new SimpleSchema({
  email: {
    type: String,
  },
  password: {
    type: String,
    min: 8,
  },
  termsAccepted: {
    type: Boolean,
    allowedValues: [true]
  },
  phoneNumber: {
    type: String
  }
})
