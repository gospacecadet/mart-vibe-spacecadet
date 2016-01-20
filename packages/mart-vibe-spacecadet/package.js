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

  api.addFiles('mart-template-spacecadet.js', 'client');

  // lib
  api.addFiles(['lib/globals.js'], 'client')

  // Helpers
  api.addFiles([
    'lib/helpers/helpers.js',
    'lib/helpers/time-helpers.js',
    'lib/helpers/profile-helpers.js',
    'lib/helpers/image-helpers.js',
    'lib/helpers/bank-account-helpers.js',
    'lib/errors.html',
    'lib/errors.js',
  ], 'client')

  // Schemas
  api.addFiles([
    'lib/schemas/docking-schema.js',
    'lib/schemas/credit-card-schema.js',
    'lib/schemas/shopper-sign-up-schema.js',
    'lib/schemas/merchant-sign-up-schema.js',
    'lib/schemas/profile-schema.js',
    'lib/schemas/new-line-item-schema.js',
    'lib/schemas/new-bank-account-schema.js',
  ], 'client')

  api.export("DockingSchema", "client")
  api.export("CreditCardSchema", "client")
  api.export("ShopperSignUpSchema", "client")
  api.export("MerchantSignUpSchema", "client")
  api.export("ProfileSchema", "client")
  api.export("NewLineItemSchema", "client")
  api.export("NewBankAccountSchema", "client")

  // Assets
  api.addAssets("assets/avatar.png", "client")
  api.addAssets("assets/space.jpg", "client")

  // Layouts
  api.addFiles([
    'layouts/main-layout.html',
    'layouts/_boxed-style.html',
    'layouts/_settings-style.html',
    'layouts/main-layout.js',
  ], 'client')

  // Routes
  api.addFiles([
    'routes/accounts-router.js',
    'routes/accounts-router-helpers.js',
    'routes/admin-router.js',
    'routes/admin-router-helpers.js',
    'routes/bank-accounts-router.js',
    'routes/bank-accounts-router-helpers.js',
    'routes/messages-router.js',
    'routes/messages-router-helpers.js',
    'routes/pages-route-helpers.js',
    'routes/pages-router.js',
    'routes/docking-router.js',
    'routes/dockings-route-helpers.js',
    'routes/properties-router.js',
    'routes/properties-router-helpers.js'
  ], 'client')

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
    'templates/bank-accounts/bank-accounts/bank-accounts.js',

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
    'templates/dockings/manage/manage-dockings-approval.js',
    'templates/dockings/manage/upcoming-docking.js',

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
    'templates/properties/new/new-property.js',

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
    'templates/spaces/space/space-top-unit-selection.js',
    'templates/spaces/space/space-details.js',
    'templates/spaces/space/space-top-for.js',
    'templates/spaces/shared/space-card.js',
    'templates/spaces/shared/space-card-buttons.js',
    'templates/spaces/shared/space-booking.js',
  ], 'client')

  // JS
  api.addFiles([
    'templates/dockings/dock.js',
    'templates/messages/thread.js',
    'templates/spaces/manage-space.js',
    'templates/properties/manage-properties.js',
    // 'templates/properties/manage-property.js',
  ], 'client')


  // Stylesheets
  api.addFiles([
    'stylesheets/_variables.scss',
    'stylesheets/footers.scss',
    'stylesheets/messages.scss',
    'stylesheets/navbar.scss',
    'stylesheets/property.scss',
    'stylesheets/space.scss',
    'stylesheets/docking.scss',
    'stylesheets/not-found.scss',
    'stylesheets/spacecadet.scss',
  ], 'client')
});
