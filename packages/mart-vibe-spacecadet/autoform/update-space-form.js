var hooksObject = {
  // Called every time an update or typeless form
  // is revalidated, which can be often if keyup
  // validation is used.
  formToModifier: function(modifier) {
    // console.log('formToModifier');
    // console.log(modifier);
    var _set = modifier.$set
    if(_set && _set.securityDepositInCents)
      modifier.$set.securityDepositInCents = parseInt(_set.securityDepositInCents * 100);
    return modifier;
  },

  // Called whenever `doc` attribute reactively changes, before values
  // are set in the form fields.
  docToForm: function(doc, ss) {
    // console.log('docToForm');
    // console.log(doc);
    if(doc.securityDepositInCents)
      doc.securityDepositInCents = parseFloat(doc.securityDepositInCents) / 100;

    return doc;
  },
};
AutoForm.addHooks(['updateSpaceForm'], hooksObject);
