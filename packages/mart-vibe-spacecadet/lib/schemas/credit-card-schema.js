CreditCardSchema = new SimpleSchema({
  number: {
    type: Number,
    label: "Credit card number",
    min: 1000000000000000,
    max: 9999999999999999
  },
  nameOnCard: {
    type: String,
    label: "Name on card",
  },
  expMonth: {
    type: Number,
    label: "Exp month",
    min: 0,
    max: 12
  },
  expYear: {
    type: Number,
    label: "Exp year",
    min: new Date().getFullYear(),
    max: new Date().getFullYear() + 100
  },
  cvc: {
    type: Number,
    label: "CVC",
    min: 100,
    max: 999
  }
})
