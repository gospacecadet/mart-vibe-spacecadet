Template.reports.events({
  "submit #report-form": function(event, template) {
    event.preventDefault()

    var nameFile = 'SpaceCadet_' + new Date().getTime() + '.csv';
    var startAnal = event.target.startAnal.value
    var endAnal = event.target.endAnal.value

    if(startAnal && endAnal) {
      var startAnal = new Date(startAnal)
      var endAnal = new Date(endAnal)

      Meteor.call('mart/report', startAnal, endAnal, function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }
      });
    }

  }
});
