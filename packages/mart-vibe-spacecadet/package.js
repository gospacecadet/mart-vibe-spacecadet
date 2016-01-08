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
    'session',
    'underscore'
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
    'lepozepo:accounting@1.0.0',
    'fortawesome:fontawesome@4.5.0'
  ])

  api.imply([
    'kadira:flow-router'
  ])

  api.use('twbs:bootstrap@4.0.0-spacecadet', 'client');

  api.addFiles('mart-template-spacecadet.js', 'client');

  // lib
  api.addFiles([
    'lib/helpers.js',
    'lib/docking-schema.js',
    'lib/credit-card-schema.js',
  ], 'client')

  api.export("DockingSchema", "client")
  api.export("CreditCardSchema", "client")

  // Routes
  api.addFiles([
    'routes/pages-route-helpers.js',
    'routes/pages-router.js',
    'routes/docking-router.js',
    'routes/dockings-route-helpers.js',
    'routes/spaces-router.js',
    'routes/spaces-route-helpers.js',
    'routes/properties-router.js',
    'routes/properties-router-helpers.js'
  ], 'client')

  // Layouts
  api.addFiles([
    'layouts/layouts.html',
  ], 'client')

  // Templates
  api.addFiles([
    'templates/footers.html',
    'templates/navbar.html',
    'templates/property.html',
    'templates/dockings/dock.html',
    'templates/dockings/dock-form-billing.html',
    'templates/dockings/dock-form-contact.html',
    'templates/dockings/dock-details.html',
    'templates/messages/thread.html',
    'templates/spaces/space.html',
    'templates/spaces/space-top.html',
    'templates/spaces/space-details.html',
    'templates/spaces/space-top-unit-selection.html',
    'templates/spaces/space-top-for.html',
  ], 'client')

  // JS
  api.addFiles([
    'templates/spaces/space-top-unit-selection.js',
    'templates/spaces/space-top-for.js',
    'templates/spaces/space-details.js',
    'templates/dockings/dock.js',
    'templates/messages/thread.js',
  ], 'client')


  // Stylesheets
  api.addFiles([
    'stylesheets/footers.scss',
    'stylesheets/messages.scss',
    'stylesheets/navbar.scss',
    'stylesheets/property.scss',
    'stylesheets/space.scss',
    'stylesheets/docking.scss',
    'stylesheets/spacecadet.scss',
  ], 'client')
});
