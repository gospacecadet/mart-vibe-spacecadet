Template.reports.onCreated(function() {
  this.autorun(function(){
    if(!Mart.isAdmin()) {
      forbid()
    } else {
      permit()
    }
  });
})
