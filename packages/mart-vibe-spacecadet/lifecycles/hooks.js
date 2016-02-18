MeteorErrorHook = {
  onError: function(operation, error) {
    console.log(error);
    if(error && error.reason) {
      sAlert.error(error.reason)
    }
  }
}

function startPermitted(context) {
  permit()
}

FlowRouter.triggers.enter([startPermitted]);
