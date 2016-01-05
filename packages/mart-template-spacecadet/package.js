Package.describe({
  name: 'marvin:mart-template-spacecadet',
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
    'templating'
  ], 'client');

  api.use([
    'kadira:blaze-layout@2.3.0',
    'kadira:flow-router@2.10.0',
    'juliancwirko:s-alert@3.1.3'
  ])

  api.use('twbs:bootstrap@4.0.0-spacecadet', 'client');

  api.addFiles('mart-template-spacecadet.js', 'client');

  api.addFiles([
    'layouts.html'
  ], 'client')

  api.addFiles([
    'router.js',
  ], 'client')
});
