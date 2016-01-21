Package.describe({
  name: 'marvin:mart-vibe-spacecadet',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A Vibe for Mart, built for SpaceCadet.',
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
    'underscore',
    'jquery'
  ], 'client');

  api.use([
    'kadira:blaze-layout@2.3.0',
    'kadira:flow-router@2.10.0',
    'juliancwirko:s-alert@3.1.3',
    'fourseven:scss@3.4.1',
    'aldeed:autoform@5.8.1',
    'aldeed:collection2@2.5.0',
    'aldeed:simple-schema@1.4.0',
    'mizzao:jquery-ui@1.11.4',
    'lepozepo:accounting@1.0.0',
    'fortawesome:fontawesome@4.5.0',
    'momentjs:moment@2.10.6'
  ])

  api.imply([
    'kadira:flow-router',
    'aldeed:autoform',
    'juliancwirko:s-alert',
  ])

  api.use('twbs:bootstrap@4.0.0-alpha.2', 'client');

  var paths
  ////////////////////////////////////////////////////
  // Assets
  paths = ['assets']
  api.addAssets(pre(paths) + "avatar.png", "client")
  api.addAssets(pre(paths) + "space.jpg", "client")

  ////////////////////////////////////////////////////
  // Lib
  paths = ['lib']
  api.addFiles([
    pre(paths) + 'constants.js',
    pre(paths) + 'globals.js',
  ], 'client')

    // Errors
    paths = ['lib', 'errors']
    api.addFiles([
      pre(paths) + 'errors.html',
      pre(paths) + 'errors.js',
    ], 'client')


    // Helpers
    paths = ['lib', 'helpers']
    api.addFiles([
      pre(paths) + 'collection-helpers.js',
      pre(paths) + 'image-helpers.js',
      pre(paths) + 'money-helpers.js',
      pre(paths) + 'profile-helpers.js',
      pre(paths) + 'text-helpers.js',
      pre(paths) + 'time-helpers.js',
    ], 'client')

    // Schemas
    paths = ['lib', 'schemas']
    api.addFiles([
      pre(paths) + 'credit-card-schema.js',
      pre(paths) + 'docking-schema.js',
      pre(paths) + 'merchant-sign-up-schema.js',
      pre(paths) + 'new-bank-account-schema.js',
      pre(paths) + 'new-line-item-schema.js',
      pre(paths) + 'profile-schema.js',
      pre(paths) + 'shopper-sign-up-schema.js',
    ], 'client')

    api.export("CreditCardSchema", "client")
    api.export("DockingSchema", "client")
    api.export("MerchantSignUpSchema", "client")
    api.export("NewBankAccountSchema", "client")
    api.export("NewLineItemSchema", "client")
    api.export("ProfileSchema", "client")
    api.export("ShopperSignUpSchema", "client")

    // Session IDs
    paths = ['lib', 'session-ids']
    api.addFiles([
      pre(paths) + 'space-session-ids.js',
    ], 'client')

  /////////////////////////////////////////////////////////
  // Layouts
  paths = ['layouts']
  api.addFiles([
    pre(paths) + 'main-layout.html',
    pre(paths) + '_boxed-style.html',
    pre(paths) + '_settings-style.html',
    pre(paths) + 'main-layout.js',
  ], 'client')

  ////////////////////////////////////////////////////////
  // Routes

    // Named Routes
    paths = ['routes', 'named-route-helpers']
    api.addFiles([
      pre(paths) + 'accounts-router-helpers.js',
      pre(paths) + 'admin-router-helpers.js',
      pre(paths) + 'bank-accounts-router-helpers.js',
      pre(paths) + 'dockings-router-helpers.js',
      pre(paths) + 'messages-router-helpers.js',
      pre(paths) + 'pages-router-helpers.js',
      pre(paths) + 'properties-router-helpers.js',
    ], 'client')

    // Routers
    paths = ['routes', 'routers']
    api.addFiles([
      pre(paths) + 'accounts-router.js',
      pre(paths) + 'admin-router.js',
      pre(paths) + 'bank-accounts-router.js',
      pre(paths) + 'dockings-router.js',
      pre(paths) + 'messages-router.js',
      pre(paths) + 'pages-router.js',
      pre(paths) + 'properties-router.js',
    ], 'client')

  /////////////////////////////////////////////////////////////
  // Templates
    // Shared
    api.addFiles([
      'templates/shared/footers.html',
      'templates/shared/navbar.html',
      'templates/shared/general-settings-menu.html',
    ], 'client')

    // Accounts
    api.addFiles([
      'templates/accounts/merchant-sign-up.html',
      'templates/accounts/my-profile.html',
      'templates/accounts/shopper-sign-up.html',
    ], 'client')

    // Admin
    api.addFiles([
      'templates/admin/transfer-funds.html',
    ], 'client')

    // Bank Accounts
    api.addFiles([
      'templates/bank-accounts/bank-accounts/bank-accounts.html',
      'templates/bank-accounts/bank-accounts/_default-bank-account.html',
      'templates/bank-accounts/bank-accounts/saved-bank-account.html',
      'templates/bank-accounts/bank-accounts/new-bank-account-form.html',
    ], 'client')

    // Dockings
    api.addFiles([
      'templates/dockings/dock.html',
      'templates/dockings/dock-form-billing.html',
      'templates/dockings/dock-form-contact.html',
      'templates/dockings/dock-details.html',
      'templates/dockings/docking-history/docking-history.html',
      'templates/dockings/docking-history/docking.html',
      'templates/dockings/docking-history/docking-history-details.html',
      'templates/dockings/manage/manage-dockings.html',
      'templates/dockings/manage/manage-dockings-approval.html',
      'templates/dockings/manage/manage-dockings-upcoming.html',
    ], 'client')

    // Messages
    api.addFiles([
      'templates/messages/thread.html',
      'templates/messages/inbox.html',
      'templates/messages/threads.html',
      'templates/messages/thread-modal.html',
      'templates/messages/thread-buttons.html',
    ], 'client')

    // Pages
    api.addFiles([
      'templates/pages/homepage.html',
      'templates/pages/list-space.html',
      'templates/pages/not-found.html',
      'templates/pages/loading.html',
    ], 'client')

    // Properties
    api.addFiles([
      'templates/properties/manage-properties.html',
      'templates/properties/manage-property.html',
      'templates/properties/new/new-property.html',
      'templates/properties/properties.html',
      'templates/properties/property/property.html',
      'templates/properties/property/property-details.html',
      'templates/properties/property/property-spaces.html',
      'templates/properties/shared/upload-property-image.html',
    ], 'client')

    // Spaces
    api.addFiles([
      'templates/spaces/space/space.html',
      'templates/spaces/shared/space-card.html',
      'templates/spaces/space/space-top.html',
      'templates/spaces/shared/space-card-buttons.html',
      'templates/spaces/shared/space-booking.html',
      'templates/spaces/manage-space.html',
      'templates/spaces/space/space-details.html',
      'templates/spaces/space/space-top-unit-selection.html',
      'templates/spaces/space/space-top-for.html',
    ], 'client')

  ////////////////////////////////////////////////////////////////////////
  // JS
  api.addFiles([
    'templates/properties/new/new-property.js',
    'templates/admin/transfer-funds.js',
    'templates/bank-accounts/bank-accounts/bank-accounts.js',
    'templates/dockings/manage/manage-dockings-approval.js',
    'templates/dockings/manage/upcoming-docking.js',
    'templates/spaces/space/space-top-unit-selection.js',
    'templates/spaces/space/space-details.js',
    'templates/spaces/space/space-top-for.js',
    'templates/spaces/shared/space-card.js',
    'templates/spaces/shared/space-card-buttons.js',
    'templates/spaces/shared/space-booking.js',
    'templates/dockings/dock.js',
    'templates/messages/thread.js',
    'templates/spaces/manage-space.js',
    'templates/properties/manage-properties.js',
    // 'templates/properties/manage-property.js',
  ], 'client')

  /////////////////////////////////////////////
  paths = ['stylesheets']

  // Stylesheets
  api.addFiles([
    pre(paths) + '_variables.scss',
    pre(paths) + 'dockings.scss',
    pre(paths) + 'footers.scss',
    pre(paths) + 'messages.scss',
    pre(paths) + 'navbar.scss',
    pre(paths) + 'not-found.scss',
    pre(paths) + 'property.scss',
    pre(paths) + 'space.scss',
    pre(paths) + 'spacecadet.scss',
  ], 'client')
});

var pre = function(paths) {
  return paths.join("/") + "/"
}
