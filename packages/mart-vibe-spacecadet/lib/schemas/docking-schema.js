DockingSchema = new SimpleSchema({
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
    label: "Renting on behalf of business"
  },
  contactFirstName: {
    type: String,
    label: "First name"
  },
  contactLastName: {
    type: String,
    label: "Last name"
  },
  contactEmail: {
    type: String,
    label: "Email"
  },
  contactPhone: {
    type: String,
    label: "Phone number"
  },
  contactBusiness: {
    type: String,
    optional: true,
    label: 'Business name'
  },
  contactAddress: {
    type: String,
    label: "Address"
  },
  contactAddress2: {
    type: String,
    optional: true,
    label: "Address (optional)"
  },
  contactCity: {
    type: String,
    label: "City"
  },
  contactState: {
    type: String,
    label: "State"
  },
  contactZIP: {
    type: String,
    label: "ZIP"
  },
  referer: {
    type: String,
    label: "Referer",
    optional: true
  }
})
