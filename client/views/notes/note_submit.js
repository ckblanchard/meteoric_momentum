Template.noteSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var note = {
      title: $(e.target).find('[name=title]').val(),
      noteBody: $(e.target).find('[name=noteBody]').val()
    }

    Meteor.call('note', note, function(error, id){
      if (error) {
        // display error to user
        throwError(error.reason);
        if (error.error === 302)
          Router.go('notePage', {_id: error.details})
      } else {
        Router.go('notePage', {_id: id});
      }
    });
  }
});