Template.reports.events({
  "submit #report-form": function(event, template) {
    event.preventDefault()

    var nameFile = 'SpaceCadet_Dockings_' + new Date().getTime() + '.csv';
    var startAnal = event.target.startAnal.value
    var endAnal = event.target.endAnal.value

    if(startAnal && endAnal) {
      var startAnal = new Date(startAnal)
      var endAnal = new Date(endAnal)

      Meteor.call('mart/report/carts', startAnal, endAnal, function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }
      });
    }

  },

  "click .export-properties": function(event, template) {
    var nameFile = 'SpaceCadet_Properties_' + new Date().getTime() + '.csv';

    Meteor.call('mart/report/storefronts', function(err, fileContent) {
      if(fileContent){
        var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
        saveAs(blob, nameFile);
      }
    });
  },

  "click .export-spaces": function(event, template) {
    var nameFile = 'SpaceCadet_Spaces_' + new Date().getTime() + '.csv';

    Meteor.call('mart/report/products', function(err, fileContent) {
      if(fileContent){
        var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
        saveAs(blob, nameFile);
      }
    });
  }
});
