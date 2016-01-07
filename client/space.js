Template.spaceTopImageAndButtons.helpers({
  thumbnailUrl: 'https://s3.amazonaws.com/local.beta.spacecadet.io/stations/wcaZQQqwZ2njWkvD9/thumbnail/1.jpg',
  name: "some space"
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
  detailsSelected: true,
  locationSelected: false,
  reviewsSelected: false,
});

Template.spaceDetailDetails.helpers({
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
  propertyName: "Great Property Name",
  propertyDescription: "Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus."
});
