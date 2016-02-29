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
  dobDay: {
    type: Number,
    optional: true,
  },
  dobMonth: {
    type: Number,
    optional: true,
  },
  dobYear: {
    type: Number,
    optional: true,
  },
  typeOnGateway: {
    type: String,
    optional: true,
    allowedValues: [
      Mart.GatewayTypes.Stripe.TYPE_ON_GATEWAY.INDIVIDUAL,
      Mart.GatewayTypes.Stripe.TYPE_ON_GATEWAY.COMPANY
    ]
  }
})
