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
})
