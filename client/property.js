Template.property.helpers({
  property: {
    currentImageUrl: "https://s3.amazonaws.com/spacecadet-staging.beta.spacecadet.io/stations/o9YFDut8QoCScvENA/optimized/1.jpg",
    name: "Sample Property",
    spaces: [
      {
        _id: "cat"
      }
    ]
  }
});

var properties = [
  {
    thumbnailUrl: "https://s3.amazonaws.com/spacecadet-staging.beta.spacecadet.io/stations/o9YFDut8QoCScvENA/thumbnail/1.jpg",
    _id: "asdfas",
    name: "Property 1",
    description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. ",
    spaces: [
      {
        _id: 'asdfasdfasdfasdf',
        name: "My first space",
        description: "Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.",
        thumbnailUrl: "https://s3.amazonaws.com/spacecadet-staging.beta.spacecadet.io/stations/o9YFDut8QoCScvENA/thumbnail/1.jpg",
      },
      {
        _id: 'asdfasdfasdfasdf',
        name: "Go space",
        description: "Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices",
        thumbnailUrl: "https://s3.amazonaws.com/spacecadet-staging.beta.spacecadet.io/stations/o9YFDut8QoCScvENA/thumbnail/1.jpg",
      }
    ]
  },
  {
    thumbnailUrl: "https://s3.amazonaws.com/spacecadet-staging.beta.spacecadet.io/stations/o9YFDut8QoCScvENA/thumbnail/1.jpg",
    _id: "assss",
    name: "Property 2",
    description: "et, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed",
    spaces: [
      {
        _id: 'asdfasdfasdfasdf',
        name: "He said go there",
        description: "Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes",
        thumbnailUrl: "https://s3.amazonaws.com/spacecadet-staging.beta.spacecadet.io/stations/o9YFDut8QoCScvENA/thumbnail/1.jpg",
      }
    ]
  }
]

Template.properties.helpers({
  properties: properties
});

Template.manageProperties.helpers({
  properties: properties
});

Template.manageProperty.helpers({
  property: properties[0]
});

Template.uploadPropertyImage.helpers({
  url:  "https://s3.amazonaws.com/spacecadet-staging.beta.spacecadet.io/stations/o9YFDut8QoCScvENA/thumbnail/1.jpg",
});
