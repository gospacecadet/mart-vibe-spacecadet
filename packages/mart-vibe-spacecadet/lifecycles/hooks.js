MeteorErrorHook = {
  onError: function(operation, error) {
    console.log(error);
    if(error && error.reason) {
      sAlert.error(error.reason)
    } else if(error && error.message) {
      sAlert.error(error.message)
    }
  }
}

function startPermitted(context) {
  permit()
}

FlowRouter.triggers.enter([startPermitted]);
