Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('notes'); }
});

Router.map(function() {
  this.route('notesList', {path: '/'});
  this.route('notePage', {
    path: 'notes/:_id',
    data: function() { return Notes.findOne(this.params._id); }
  });
});