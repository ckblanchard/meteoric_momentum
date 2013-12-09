Template.noteSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var note = {
      title: $(e.target).find('[name=title]').val(),
      noteBody: $(e.target).find('[name=noteBody]').val()
    }

    Meteor.call('note', note, function(error, id){
      if (error)
        return alert(error.reason);

      Router.go('notePage', {_id: id});
    });
  }
});