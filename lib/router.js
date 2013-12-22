Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('notes'); }
});

Router.map(function() {
  this.route('notesList', {path: '/'});
  this.route('notePage', {
    path: '/notes/:_id',
    data: function() { return Notes.findOne(this.params._id); }
  });
  this.route('noteEdit', {
    path: '/notes/:_id/edit',
    data: function() { return Notes.findOne(this.params._id); }
  });
  this.route('noteSubmit', {
    path: '/submit'
  });
});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
    this.stop();
  }
}
Router.before(requireLogin, {only: 'noteSubmit'})
Router.before(function() { clearErrors() });