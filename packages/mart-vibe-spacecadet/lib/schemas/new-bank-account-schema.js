NewBankAccountSchema = new SimpleSchema({
  nickname: {
    type: String,
  },
  routingNumber: {
    type: String,
  },
  accountNumber: {
    type: String
  },
  isDefault: {
    type: Boolean,
  },
})
