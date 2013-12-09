Notes = new Meteor.Collection('notes');

Meteor.methods({
  note: function(noteAttributes) {
    var user = Meteor.user();

    // ensure user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to sign in.");

    // ensure note has a title
    if (!noteAttributes.title)
      throw new Meteor.Error(422, 'Please fill in the title.');

    // pick out whitelisted keys
    var note = _.extend(_.pick(noteAttributes, 'title', 'noteBody'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    var noteId = Notes.insert(note);

    return noteId;
  }
});