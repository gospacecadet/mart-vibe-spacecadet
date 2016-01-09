Mart.Storefronts = new Mongo.Collection("MartStorefronts")
Mart.Storefronts.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 50
  },
  description: {
    type: String,
    label: "Description",
    optional: true,
    max: 1000
  },
  isPublished: {
    type: Boolean,
    label: "Ready to be published?",
  },
  isDeleted: {
    type: Boolean,
  },
  userId: {
    type: String,
    denyUpdate: true
  },
  repId: {
    type: String,
    optional: true,
  },
  address: {
    type: String
  },
  address2: {
    type: String,
    optional: true
  },
  city: {
    type: String,
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
}))
