Notes = new Meteor.Collection('notes');

Notes.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Notes.deny({
  update: function(userId, note, fieldNames) {
    // can only edit following fields
    return (_.without(fieldNames, 'title', 'noteBody').length > 0);
  }
});

Meteor.methods({
  note: function(noteAttributes) {
    var user = Meteor.user(),
      noteWithSameTitle = Notes.findOne({title: noteAttributes.title});

    // ensure user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to sign in.");

    // ensure note has a title
    if (!noteAttributes.title)
      throw new Meteor.Error(422, 'Please fill in the title.');

    // check note titles are unique
    if (noteAttributes.title && noteWithSameTitle) {
      throw new Meteor.Error(302, "This title is taken", noteWithSameTitle._id);
    }

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