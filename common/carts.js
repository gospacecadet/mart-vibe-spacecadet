Mart.Carts = new Mongo.Collection("MartCarts")
Mart.Carts.attachSchema(new SimpleSchema({
  state: {
    type: String,
  },
  merchantId: {
    type: String,
  },
  userId: {
    type: String,
    optional: true
  },
  guestId: {
    type: String,
    optional: true
  },
  cardId: {
    type: String,
    optional: true
  },
  cardToken: {
    type: String,
    optional: true
  },
  contactFirstName: {
    type: String,
    optional: true
  },
  contactLastName: {
    type: String,
    optional: true
  },
  contactEmail: {
    type: String,
    optional: true
  },
  contactPhone: {
    type: String,
    optional: true
  },
  contactEntity: {
    type: String,
    optional: true
  },
  contactAddress: {
    type: String,
    optional: true
  },
  contactAddress2: {
    type: String,
    optional: true
  },
  contactCity: {
    type: String,
    optional: true
  },
  contactZIP: {
    type: String,
    optional: true
  },
  serviceFee: {
    type: Number,
    optional: true
  },
  connectionFee: {
    type: Number,
    optional: true
  },
  merchantCut: {
    type: Number,
    optional: true
  },
  tax: {
    type: Number,
    optional: true
  },
  paymentAt: {
    type: Date,
    optional: true
  },
  paymentConfirmation: {
    type: String,
    optional: true
  },
  paymentAmount: {
    type: Number,
    optional: true
  },
  cartAcceptedAt: {
    type: Date,
    optional: true
  },
  transferredAt: {
    type: Date,
    optional: true
  },
  transferredToBankAccountId: {
    type: String,
    optional: true
  },
  transferredToManagedAccountId: {
    type: String,
    optional: true
  },
  transferAcceptedAt: {
    type: Date,
    optional: true
  },
  transferConfirmation: {
    type: String,
    optional: true
  },
  transferAmount: {
    type: Number,
    optional: true
  },
  settledAt: {
    type: Date,
    optional: true
  },
  transferAcceptedByAdminId: {
    type: String,
    optional: true
  }
}));
