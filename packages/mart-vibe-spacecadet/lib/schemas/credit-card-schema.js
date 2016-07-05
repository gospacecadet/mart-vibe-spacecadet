CreditCardSchema = new SimpleSchema({
  number: {
    type: Number,
    label: "Credit card number"
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
    label: "CVC"
  }
})
