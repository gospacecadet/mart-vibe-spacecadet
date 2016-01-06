Mart = {
  LineItems: new Mongo.Collection("line-items")
}

Mart.LineItems.attachSchema(new SimpleSchema({
  cartId: {
    type: String,
    optional: true
  },
  guestId: {
    type: String,
    optional: true
  },
  productId: {
    type: String,
    optional: true
  },
  unit: {
    type: String,
    optional: true
  },
  quantity: {
    type: Number,
    optional: true
  },
  startAtDate: {
    type: Date,
    optional: true
  },
  startAtHour: {
    type: Number,
    optional: true
  },
  startAtMinute: {
    type: Number,
    optional: true
  },
  productNameAtCheckout: {
    type: String,
    optional: true
  }
}));
