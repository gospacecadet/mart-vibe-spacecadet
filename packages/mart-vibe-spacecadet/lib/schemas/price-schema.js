PriceSchema = new SimpleSchema({
  productId: {
    type: String,
  },
  priceInDollars: {
    type: Number,
    decimal: true
  },
  unit: {
    type: String,
    allowedValues: [HOUR, DAY, MONTH]
  }
});
