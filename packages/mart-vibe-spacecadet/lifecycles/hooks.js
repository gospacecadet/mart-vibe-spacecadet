MeteorErrorHook = {
  onError: function(operation, error) {
    console.log(error);
    if(error && error.reason) {
      sAlert.error(error.reason)
    }
  }
}
