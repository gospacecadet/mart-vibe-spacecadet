Template.thread.helpers({
  recipientName: "Jerome Morgan",
});

Template.thread.helpers({
  messages: [{
      body: "De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
      timestamp: "10 minutes ago",
      userId: "me",
      isFile: false,
    },
    {
      filename: "Signed contract agreement",
      body: "http://imms.org/downloads/brochure/IMMS_Stingray_Brochure_quadfold-final.pdf",
      timestamp: "15 minutes ago",
      userId: "me",
      isFile: true
    },
    {
      body: "Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.",
      timestamp: "15 minutes ago",
      isFile: false,
    },
    {
      filename: "Updated contract",
      body: "http://imms.org/downloads/brochure/IMMS_Stingray_Brochure_quadfold-final.pdf",
      timestamp: "15 minutes ago",
      isFile: true
    },
    {
      body: "Qui animated corpse.",
      timestamp: "1 day ago",
      userId: "me",
      isFile: false,
    }
  ],
});

Template.threadMessage.helpers({
  messageClass: function() {
    return (this.userId === "me") ? "alert alert-success col-md-8" :
      "alert alert-info col-md-8 col-md-offset-4"
  }
});
