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
  contactRentingOnBehalfBiz: {
    type: Boolean,
    optional: true,
    label: "Renting on behalf of business"
  },
  contactFirstName: {
    type: String,
    optional: true,
    label: "First name"
  },
  contactLastName: {
    type: String,
    optional: true,
    label: "Last name"
  },
  contactEmail: {
    type: String,
    optional: true,
    label: "Email"
  },
  contactPhone: {
    type: String,
    optional: true,
    label: "Phone number"
  },
  contactEntity: {
    type: String,
    optional: true,
    label: 'Business name'
  },
  contactAddress: {
    type: String,
    optional: true,
    label: "Address"
  },
  contactAddress2: {
    type: String,
    optional: true,
    label: "Address (optional)"
  },
  contactCity: {
    type: String,
    optional: true,
    label: "City"
  },
  contactZIP: {
    type: String,
    optional: true,
    label: "ZIP/Postal code"
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
