MerchantProfileSchema = new SimpleSchema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  businessName: {
    type: String,
  },
  dobDay: {
    type: Number,
  },
  dobMonth: {
    type: Number,
  },
  dobYear: {
    type: Number,
  },
  typeOnGateway: {
    type: String,
    allowedValues: typesOnGateway()
  }
})
