NewBankAccountSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Account Nickname"
  },
  businessName: {
    type: String,
    label: "Entity name"
  },
  routingNumber: {
    type: String,
  },
  accountNumber: {
    type: String
  },
  accountType: {
    type: String,
    allowedValues: BANK_ACCOUNT_TYPES
  }
})
