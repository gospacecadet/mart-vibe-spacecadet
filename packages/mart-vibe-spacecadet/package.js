Package.describe({
  name: 'marvin:mart-vibe-spacecadet',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A Vibe for Mart, built for SpaceCadet.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/marvinmarnold/mart-vibe-spacecadet',
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
    'jquery',
    'reactive-var',
    'accounts-password',
    'check',
    'ejson'
  ]);

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
    'momentjs:moment@2.10.6',
    'marvin:javascript-load-image@2.1.2',
    'altapp:recaptcha@2.0.0',
    'fermuch:pickadate@1.0.0'
  ])


  api.imply([
    'kadira:flow-router',
    'aldeed:autoform',
    'juliancwirko:s-alert',
  ])

  api.use('twbs:bootstrap@4.0.0-alpha.2', 'client');

  // reCAPTCHA
  api.addFiles(['server/recaptcha.js', 'server/methods.js'], 'server');
  api.addFiles('lib/recaptcha.js', 'client');

  var paths
  ////////////////////////////////////////////////////
  // Assets
  paths = ['assets']
  api.addAssets(pre(paths) + "avatar.png", "client")
  api.addAssets(pre(paths) + "space.jpg", "client")
  api.addAssets(pre(paths) + "forbidden.jpg", "client")

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
      pre(paths) + 'permission-helpers.js',
      pre(paths) + 'profile-helpers.js',
      pre(paths) + 'text-helpers.js',
      pre(paths) + 'time-helpers.js',
    ], 'client')

    // Images
    paths = ['lib', 'images']
    api.addFiles([
      pre(paths) + 'upload.js',
    ], 'client')

    // Schemas
    paths = ['lib', 'schemas']
    api.addFiles([
      pre(paths) + 'credit-card-schema.js',
      pre(paths) + 'docking-schema.js',
      pre(paths) + 'merchant-sign-up-schema.js',
      pre(paths) + 'new-bank-account-schema.js',
      pre(paths) + 'new-line-item-schema.js',
      pre(paths) + 'password-update-schema.js',
      pre(paths) + 'price-schema.js',
      pre(paths) + 'profile-schema.js',
      pre(paths) + 'shopper-sign-up-schema.js',
      pre(paths) + 'user-login-schema.js',
    ], 'client')

    api.export("CreditCardSchema", "client")
    api.export("DockingSchema", "client")
    api.export("MerchantSignUpSchema", "client")
    api.export("NewBankAccountSchema", "client")
    api.export("NewLineItemSchema", "client")
    api.export("PasswordUpdateSchema", "client")
    api.export("PriceSchema", "client")
    api.export("ProfileSchema", "client")
    api.export("ShopperSignUpSchema", "client")
    api.export("UserLoginSchema", "client")

    // Session IDs
    paths = ['lib', 'session-ids']
    api.addFiles([
      pre(paths) + 'shared-session-ids.js',
      pre(paths) + 'space-session-ids.js',
      pre(paths) + 'property-session-ids.js',
    ], 'client')

  /////////////////////////////////////////////////////////
  // Layouts
  paths = ['layouts']
  api.addFiles([
    pre(paths) + 'main-layout.html',
    pre(paths) + '_boxed-style.html',
    pre(paths) + '_settings-style.html',
    pre(paths) + 'main-layout.js',
    pre(paths) + 'homepage-layout.html',
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
      pre(paths) + 'subscriptions-router-helpers.js',
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
      pre(paths) + 'subscriptions-router.js',
      pre(paths) + 'properties-router.js',
    ], 'client')

  /////////////////////////////////////////////////////////////
  // Templates
  // Shared
  api.addFiles([
    'templates/shared/footers.html',
    'templates/shared/login-modal.html',
    'templates/shared/split-title.html',
    'templates/shared/user-login.html',
  ], 'client')

    // Navbar
    paths = ['templates', 'shared', 'navbar']
    api.addFiles([
      pre(paths) + 'navbar.html',
      pre(paths) + 'navbar-md/_navbar-md-components.html',
      pre(paths) + 'navbar-md/navbar-md.html',
      pre(paths) + 'navbar-md/navbar-md-admin.html',
      pre(paths) + 'navbar-md/navbar-md-merchant.html',
      pre(paths) + 'navbar-md/navbar-md-shopper.html',
      pre(paths) + 'navbar-sm/_navbar-sm-components.html',
      pre(paths) + 'navbar-sm/navbar-sm.html',
      pre(paths) + 'navbar-sm/navbar-sm-admin.html',
      pre(paths) + 'navbar-sm/navbar-sm-merchant.html',
      pre(paths) + 'navbar-sm/navbar-sm-shopper.html',
    ], 'client')


  // Accounts
  api.addFiles([
    'templates/accounts/merchant-sign-up.html',
    'templates/accounts/my-profile.html',
    'templates/accounts/my-profile-avatar.html',
    'templates/accounts/security.html',
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
      'templates/dockings/docking-history/docking-history-accepted.html',
      'templates/dockings/docking-history/docking-history-rejected.html',
      'templates/dockings/docking-history/docking-history-pending.html',
      'templates/dockings/docking-history/docking-history-nav.html',
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
      'templates/pages/about.html',
      'templates/pages/forbidden.html',
      'templates/pages/homepage.html',
      'templates/pages/list-space.html',
      'templates/pages/loading.html',
      'templates/pages/not-found.html',
      'templates/pages/reset-password.html',
      'templates/pages/sxsw.html',
    ], 'client')

    // Properties
    paths = ['templates', 'properties']
    api.addFiles([
      pre(paths) + 'manage/manage-properties.html',
      pre(paths) + 'manage/manage-property.html',
      pre(paths) + 'manage/manage-property-form.html',
      pre(paths) + 'manage/manage-property-images.html',
      pre(paths) + 'manage/manage-property-spaces.html',
      pre(paths) + 'manage/manage-property-image.html',
      pre(paths) + 'new/new-property-form.html',
      pre(paths) + 'new/new-property-image.html',
      pre(paths) + 'new/new-property-images.html',
      pre(paths) + 'new/new-property.html',
      pre(paths) + 'properties.html',
      pre(paths) + 'property/property.html',
      pre(paths) + 'property/property-details.html',
      pre(paths) + 'property/property-spaces.html',
    ], 'client')

      // Properties Shared
      paths = ['templates', 'properties', 'shared']
      api.addFiles([
        pre(paths) + '_property-fields.html',
      ], 'client')

    // Spaces
    paths = ['templates', 'spaces']
    api.addFiles([
      pre(paths) + 'space/space.html',
      pre(paths) + 'space/space-top.html',
      pre(paths) + 'space/space-details.html',
      pre(paths) + 'space/space-top-unit-selection.html',
      pre(paths) + 'space/space-top-for.html',
    ], 'client')

      // Manage
      paths = ['templates', 'spaces', 'manage']
      api.addFiles([
        pre(paths) + 'manage-space.html',
        pre(paths) + 'manage-space-edit-price.html',
        pre(paths) + 'manage-space-image.html',
        pre(paths) + 'manage-space-images.html',
        pre(paths) + 'manage-space-new-price.html',
        pre(paths) + 'manage-space-prices.html',
      ], 'client')

      // New
      paths = ['templates', 'spaces', 'new']
      api.addFiles([
        pre(paths) + 'new-space.html',
        pre(paths) + 'new-space-edit-price.html',
        pre(paths) + 'new-space-prices.html',
        pre(paths) + 'new-space-image.html',
        pre(paths) + 'new-space-images.html',
      ], 'client')

      // Shared
      paths = ['templates', 'spaces', 'shared']
      api.addFiles([
        pre(paths) + 'space-card.html',
        pre(paths) + 'space-card-buttons.html',
        pre(paths) + 'space-booking.html',
        pre(paths) + '_space-details.html',
        pre(paths) + '_space-price-fields.html',
        pre(paths) + '_space-connection-charge-exp.html',
      ], 'client')


    // Subscriptions
    paths = ['templates', 'subscriptions']
    api.addFiles([
      pre(paths) + 'subscriptions.html',
    ], 'client')

  ////////////////////////////////////////////////////////////////////////
  // JS
  api.addFiles([
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
  ], 'client')

  ////////////////////////////////////////////////////////////////////////
  // Lifecycles
  paths = ['forbiddens']
  api.addFiles([
    pre(paths) + "bank-accounts/bank-accounts-forbid.js",
    pre(paths) + "dockings/manage-dockings-forbid.js",
    pre(paths) + "properties/manage-properties-forbid.js",
    pre(paths) + "properties/new-property-forbid.js",
  ], 'client')

  ////////////////////////////////////////////////////////////////////////
  // Lifecycles
  paths = ['lifecycles']
  api.addFiles([
    pre(paths) + "hooks.js",
    pre(paths) + "accounts/my-profile-avatar.js",
    pre(paths) + "properties/new-property.js",
    pre(paths) + "properties/manage-properties.js",
    pre(paths) + "properties/manage-property.js",
    pre(paths) + "spaces/new-space.js",
    pre(paths) + "spaces/manage-space.js",
  ], 'client')

  ////////////////////////////////////////////////////////////////////////
  // Events
  paths = ['events']
  api.addFiles([
    pre(paths) + 'accounts/my-profile-avatar.js',
    pre(paths) + 'line-items/new-line-item-form.js',
    pre(paths) + 'shared/login-modal.js',
    pre(paths) + 'shared/navbar.js',
    pre(paths) + 'spaces/manage/manage-space.js',
    pre(paths) + 'spaces/manage/manage-space-image.js',
    pre(paths) + 'spaces/new/new-space.js',
    pre(paths) + 'spaces/new/new-space-image.js',
    pre(paths) + 'pages/reset-password.js',
    pre(paths) + 'properties/new/new-property-image.js',
    pre(paths) + 'properties/manage/manage-property.js',
    pre(paths) + 'properties/manage/manage-property-image.js',
    pre(paths) + 'properties/manage/manage-property-spaces.js',
    pre(paths) + 'properties/manage/manage-property-preview.js',
  ], 'client')

  ////////////////////////////////////////////////////////////////////////
  // Helpers
  paths = ['helpers']
  api.addFiles([
    pre(paths) + 'accounts/my-profile-avatar.js',
    pre(paths) + 'shared/loading.js',
    pre(paths) + 'shared/login-modal.js',
    pre(paths) + 'spaces/manage/manage-space.js',
    pre(paths) + 'spaces/manage/manage-space-image.js',
    pre(paths) + 'spaces/manage/manage-space-prices.js',
    pre(paths) + 'spaces/new/new-space-prices.js',
    pre(paths) + 'spaces/new/new-space-image.js',
    pre(paths) + 'spaces/shared/_space-connection-charge-exp.js',
    pre(paths) + 'spaces/shared/_space-price-fields.js',
    pre(paths) + 'spaces/shared/_spaceDetails.js',
    pre(paths) + 'properties/new/new-property-image.js',
    pre(paths) + 'properties/manage/manage-property-image.js',
    pre(paths) + 'properties/manage/manage-property.js',
    pre(paths) + 'properties/manage/manage-property-preview.js',
    pre(paths) + 'subscriptions/subscriptions.js',


  ], 'client')

  ////////////////////////////////////////////////////////////////////////
  // AutoForm
  paths = ['autoform']
  api.addFiles([
    pre(paths) + 'manage-property-form.js',
    pre(paths) + 'merchant-sign-up.js',
    pre(paths) + 'new-property-form.js',
    pre(paths) + 'new-space-edit-price.js',
    pre(paths) + 'new-space.js',
    pre(paths) + 'password-update-form.js',
    pre(paths) + 'shopper-sign-up.js',
    pre(paths) + 'user-login-form.js',
  ], 'client')

  ////////////////////////////////////////////////////////////////////////
  // Stylesheets
  paths = ['stylesheets']
  api.addFiles([
    pre(paths) + '_variables.scss',
    pre(paths) + 'accounts.scss',
    pre(paths) + 'dockings.scss',
    pre(paths) + 'footers.scss',
    pre(paths) + 'forbidden.scss',
    pre(paths) + 'homepage.scss',
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
