var hooksObject = {
  onSubmit: function(insertDoc, updateDoc, currentDoc) {
    var hook = this
    Accounts.changePassword(insertDoc.oldPassword, insertDoc.newPassword, function(error) {
      if(error)
        return hook.done(error)

      sAlert.success("Password successfully changed.")
      hook.done()
    })

    return false;
  },
};
AutoForm.addHooks(['passwordUpdateForm'], hooksObject);
AutoForm.addHooks('passwordUpdateForm', MeteorErrorHook, true);
