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
    label: "Day of Birth"
  },
  dobMonth: {
    type: Number,
    label: "Month of Birth"
  },
  dobYear: {
    type: Number,
    label: "Year of Birth"
  },
  typeOnGateway: {
    type: String,
    allowedValues: typesOnGateway(),
    label: "Business Type"
  }
})
