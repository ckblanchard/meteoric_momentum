Template.notesList.helpers({
  notes: function() {
    return Notes.find({}, {sort: {submitted: -1}});
  }
});