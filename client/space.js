Template.spaceTopImageAndButtons.helpers({
  thumbnailUrl: 'https://s3.amazonaws.com/local.beta.spacecadet.io/stations/wcaZQQqwZ2njWkvD9/thumbnail/1.jpg',
  name: "some space",
  userId: "theshopperId",
  propertyOwnerId: "propertyOwnerId"
});

Template.spaceTopName.helpers({
  propertyName: "Great Property Name",
  name: "Name of space",
  propertyAddress: "123 Canal St, New Orleans, LA 70113"
});

Template.spaceTopUnitSelection.helpers({
  hourlyPrice: 4995,
  dailyPrice: 12000,
  monthlyPrice: 49999
});

Template.spaceDetails.helpers({
  propertyId: "test"
});

Template.spaceDetailDetails.helpers({
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
  propertyName: "Great Property Name",
  propertyDescription: "Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus.",
  occupancy: "30 people",
  size: "20x20"
});

Template.spaceTabs.helpers({
  otherSpaces: [
    {
      _id: "asdfdasdf",
      propertyId: "asdfasd",
      name: "Other cool space",
      previewImage: "https://s3.amazonaws.com/local.beta.spacecadet.io/stations/wcaZQQqwZ2njWkvD9/thumbnail/1.jpg",
      hourlyPrice: 1500,
    },
    {
      _id: "asdfdadddsdf",
      propertyId: "asdfasd",
      name: "Another nice spot",
      previewImage: "https://s3.amazonaws.com/local.beta.spacecadet.io/stations/wcaZQQqwZ2njWkvD9/thumbnail/1.jpg",
      hourlyPrice: 2500,
    },
    {
      _id: "assssdfdadddsdf",
      propertyId: "asdfasd",
      name: "Some people like to give very long names",
      previewImage: "https://s3.amazonaws.com/local.beta.spacecadet.io/stations/wcaZQQqwZ2njWkvD9/thumbnail/1.jpg",
      hourlyPrice: 500,
    },
    {
      _id: "asdfdadddddsdf",
      propertyId: "asdfasd",
      name: "Wow tell me more",
      previewImage: "https://s3.amazonaws.com/local.beta.spacecadet.io/stations/wcaZQQqwZ2njWkvD9/thumbnail/1.jpg",
      hourlyPrice: 42352,
    },
  ]
})

Template.manageSpace.helpers({
  space: {
    _id: "assssdfdadddsdf",
    propertyId: "asdfasd",
    name: "Some people like to give very long names",
    previewImage: "https://s3.amazonaws.com/local.beta.spacecadet.io/stations/wcaZQQqwZ2njWkvD9/thumbnail/1.jpg",
    hourlyPrice: 500,
  },
});

HOUR = "hour"
DAY = "day"
MONTH = "month"

var hourlyPrice = {
  priceInCents: 3166,
  unit: DAY,
  productId: "asdfasldfj"
}

var dailyPrice = null

var monthlyPrice = {
  priceInCents: 42339,
  unit: MONTH,
  productId: "asdfaslasdfdfj"
}

Template.manageSpacePrices.helpers({
  prices: [hourlyPrice, dailyPrice, monthlyPrice]
});
