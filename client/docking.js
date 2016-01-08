Template.dockCreditCards.helpers({
  hasCreditCards: false,
  creditCards: [
    {_id: "aasdfasdf", label: "Visa *4913"}
  ],
})

Template.reserveDockingFormContact.helpers({
  cart: {
    contactFirstName: "Robleh",
    contactLastName: "Esa",
    contactEmail: "example@riseup.net",
    contactPhone: "3015551139",

  }
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
