MerchantSignUpSchema = new SimpleSchema({
  email: {
    type: String,
  },
  password: {
    type: String,
    min: 8,
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
  termsAccepted: {
    type: Boolean,
    allowedValues: [true]
  }
})
