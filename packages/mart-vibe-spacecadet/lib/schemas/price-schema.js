PriceSchema = new SimpleSchema({
  productId: {
    type: String,
  },
  priceInDollars: {
    type: Number,
    decimal: true
  },
  depositInDollars: {
    type: Number,
    decimal: true,
    optional: true
  },
  unit: {
    type: String,
    allowedValues: [HOUR, DAY, MONTH]
  }
});
