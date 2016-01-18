Template._manageDockingsApproval.helpers({
  manageDockingsHeadingId: function() {
    return "manage-docking-heading-" + this._id
  },
  manageDockingsCollapseId: function() {
    return "manage-docking-collapse-" + this._id
  },
  contactAvatar: function() {
    return "/packages/marvin_mart-vibe-spacecadet/assets/avatar.png"
  },
  contactName: function() {
    return this.contactFirstName + " " + this.contactLastName
  }
});

Template._manageDockingsApprovalLineItem.helpers({
  duration: function() {
    return this.quantity + " " + this.unit + "s"
  }
});
