Template.threadButtons.helpers({
  isSendingMessage: function() {
    return Session.get(IS_SENDING_MESSAGE)
  }
});

Template.threadButtons.onCreated(function() {
  Session.setDefault(IS_SENDING_MESSAGE, true)
})

const IS_SENDING_MESSAGE = 'is-sending-message'

Template.threadSendMessage.events({
  "click #attach-file-instead-button": function(event, template) {
    Session.set(IS_SENDING_MESSAGE, false)
  }
});

Template.threadAttachFile.events({
  "click #send-message-instead-button": function(event, template) {
    Session.set(IS_SENDING_MESSAGE, true)
  }
});
