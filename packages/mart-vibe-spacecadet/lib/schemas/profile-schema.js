ProfileSchema = new SimpleSchema({
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
    optional: true
  },
  businessName: {
    type: String,
    optional: true,
  },
})
