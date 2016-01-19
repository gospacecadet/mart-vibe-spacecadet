NewLineItemSchema = new SimpleSchema({
  cartId: {
    type: String,
  },
  guestId: {
    type: String,
    optional: true
  },
  productId: {
    type: String,
  },
  unit: {
    type: String,
    allowedValues: ['day', 'hour', 'month']
  },
  quantity: {
    type: Number
  },
  startAtDate: {
    type: Date
  },
  startAtHour: {
    type: Number
  },
  startAtMinute: {
    type: Number
  },
  startAtAMPM: {
    type: String
  }
});
