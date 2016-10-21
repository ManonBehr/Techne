import angular from 'angular';
import angularMeteor from 'angular-meteor';
import listePosts from '../imports/components/techne/ListePosts';

 

angular.module('techne', [
  angularMeteor,
  listePosts.name
]);

