MerchantSignUpSchema = new SimpleSchema({
  email: {
    type: String,
  },
  password: {
    type: String,
    min: 8,
  },
  contactFirstName: {
    type: String
  },
  contactLastName: {
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
