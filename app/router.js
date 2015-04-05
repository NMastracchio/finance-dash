import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('2011', { path:'/2011' }, function(){
    this.route('q1');
    this.route('q2');
    this.route('q3');
    this.route('q4');
  });
  this.resource('2012', { path:'/2012' }, function(){
    this.route('q1');
    this.route('q2');
    this.route('q3');
    this.route('q4');
  });
  this.resource('2013', { path:'/2013' }, function(){
    this.route('q1');
    this.route('q2');
    this.route('q3');
    this.route('q4');
  });
  this.resource('2014', { path:'/2014' }, function(){
    this.route('q1');
    this.route('q2');
    this.route('q3');
    this.route('q4');
  });
});

export default Router;
