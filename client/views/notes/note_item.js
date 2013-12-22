Template.noteItem.helpers({
  ownNote: function() {
    return this.userId == Meteor.userId();
  }
}); 