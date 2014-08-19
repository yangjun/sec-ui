import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SecUiENV.locationType
});

Router.map(function() {
  this.resource('apps', {path: '/apps'}, function() {
    this.resource('app', {path: '/:id'});
  });
});

export default Router;
