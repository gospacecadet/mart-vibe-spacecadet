ProfileSchema = new SimpleSchema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
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
