Template.noteEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentNoteId = this._id;

    var noteProperties = {
      title: $(e.target).find('[name=title]').val(),
      noteBody: $(e.target).find('[name=noteBody]').val()
    }

    Notes.update(currentNoteId, { $set: noteProperties }, function (error) {
      if (error) {
        // display the error
      throwError(error.reason);
      } else {
        Router.go('notePage', {_id: currentNoteId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this note?")) {
      var currentNoteId = this._id;
      Notes.remove(currentNoteId);
      Router.go('notesList');
    }
  }
});