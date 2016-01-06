Package.describe({
  name: 'marvin:mart-vibe-spacecadet',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'templating',
    'session'
  ], 'client');

  api.use([
    'kadira:blaze-layout@2.3.0',
    'kadira:flow-router@2.10.0',
    'juliancwirko:s-alert@3.1.3',
    'fourseven:scss@3.4.1',
    'aldeed:autoform@5.7.1',
    'aldeed:collection2@2.5.0',
    'aldeed:simple-schema@1.4.0',
    'mizzao:jquery-ui@1.11.4',
    'lepozepo:accounting@1.0.0'
  ])

  api.use('twbs:bootstrap@4.0.0-spacecadet', 'client');

  api.addFiles('mart-template-spacecadet.js', 'client');

  // lib
  api.addFiles([
    'lib/helpers.js',
  ], 'client')

  // Routes
  api.addFiles([
    'routes/router.js',
    'routes/router-helpers.js',
    'routes/properties-router.js'
  ], 'client')

  // Layouts
  api.addFiles([
    'layouts/layouts.html',
  ], 'client')

  // Templates
  api.addFiles([
    'templates/navbar.html',
    'templates/property.html',
    'templates/spaces/space.html',
    'templates/spaces/space-top.html',

    'templates/spaces/space-top-unit-selection.html',
    'templates/spaces/space-top-for.html',
  ], 'client')

  // JS
  api.addFiles([
    'templates/spaces/space-top-unit-selection.js',
    'templates/spaces/space-top-for.js',
    'templates/spaces/space-top.js',
  ], 'client')


  // Stylesheets
  api.addFiles([
    'stylesheets/property.scss'
  ], 'client')
});
