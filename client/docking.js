Template.manageDockingsApproval.helpers({
  dockingsRequiringApproval: [
    {
      contactRentingOnBehalfBiz: true,
      contactFirstName: "Marvin",
      contactLastName: "Arnold",
      contactEmail: "marvin@spacecadet.io",
      contactPhone: "3015551234",
      contactBusiness: "Unplugged",
      serviceFee: 1242,
      connectionFee: 4523,
      merchantCut: 53474,
      total: 341323,
      tax: 0,
      submittedAt: new Date(),
    },
    {
      contactRentingOnBehalfBiz: false,
      contactFirstName: "Jus",
      contactLastName: "Blaze",
      contactEmail: "jus@spacecadet.io",
      contactPhone: "3015551234",
      serviceFee: 32,
      connectionFee: 453,
      merchantCut: 2345,
      total: 2452,
      tax: 0,
      submittedAt: new Date(),
    },
    {
      contactRentingOnBehalfBiz: false,
      contactFirstName: "True",
      contactLastName: "Dat",
      contactEmail: "details-details@spacecadet.io",
      contactPhone: "3015551234",
      serviceFee: 4523,
      connectionFee: 56236,
      merchantCut: 2346523,
      total: 8354625,
      tax: 0,
      submittedAt: new Date(),
    }
  ]
});

Template.reserveDockingFormBillingCards.helpers({
  creditCards: [
    {_id: "aasdfasdf", label: "Visa **4913"},
    {_id: "ytsdf", label: "MasterCard **4913"},
  ],
})

Template.reserveDockingFormBilling.helpers({
  hasCreditCards: true
});

Template.reserveDockingFormContact.helpers({
  docking: {
    contactFirstName: "Robleh",
    contactLastName: "Esa",
    contactEmail: "example@riseup.net",
    contactPhone: "3015551139",
    contactAddress: "123 Fake St",
    contactCity: "New Orleans",
    contactZIP: "70113",
    cartIds: ["asdf", "asdfasd"]
  },
});

Template.reserveDockingDetailsAddOns.helpers({
  cartsSubtotal: 93234,
  serviceFee: 3423,
  tax: 432,
  total: 12346423,
});

Template.reserveDockingDetails.helpers({
  carts: [
    {
      currentCartImageURL: "https://s3.amazonaws.com/spacecadet-staging.beta.spacecadet.io/stations/o9YFDut8QoCScvENA/thumbnail/1.jpg",
      propertyName: "A property name",
      address: "1307 Oretha Castle Haley Blvd, Suite 303M",
      address2: "New Orleans, LA 70113",
      lineItems: [{
          spaceName: 'My First Space',
          quantity: '2',
          unit: 'day',
          unitPrice: 1234,
          spaceId: 'asdfasdf',
          propertyName: "A Cool Property",
          propertyId: 'asdfasdfasd'
        },
        {
          spaceName: 'THIS Space',
          quantity: '4',
          unit: 'month',
          unitPrice: 53456,
          spaceId: 'asdsadffasdf',
          propertyId: 'asdfsadfslkj',
          propertyName: "The Second Property",
        }
      ],
      subtotal: 43523
    },
    {
      currentCartImageURL: "https://s3.amazonaws.com/spacecadet-staging.beta.spacecadet.io/stations/o9YFDut8QoCScvENA/thumbnail/1.jpg",
      propertyName: "This place is better",
      address: "123 Fake St",
      address2: "Springfield, MD 20901",
      lineItems: [{
          spaceName: 'Some place very different',
          quantity: '2',
          unit: 'day',
          unitPrice: 2345,
          spaceId: 'asdfasdf',
          propertyName: "A Cool Property",
          propertyId: 'asdfasdfasd'
        },
      ],
      subtotal: 464563
    }
  ]
});
