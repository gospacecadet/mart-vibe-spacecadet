ProfileSchema = new SimpleSchema({
  email: {
    type: String,
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
