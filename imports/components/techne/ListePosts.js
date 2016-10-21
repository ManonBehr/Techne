import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './ListePosts.html';



class ListePostsCtrl {

  constructor() {
    this.posts = [{
      author: "Salvador Dali",
      text: "Paysage avec papillons 2, peinture à l'huile",
      url: "http://saleoilpaintings.com/paintings-image/salvador-dali/salvador-dali-landscape-with-butterflies-ii.jpg"
    }, {
      author: "Franz Mark",
      text: "Renards, peinture à l'huile",
      url: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fsaleoilpaintings.com%2Fpaintings-images%2Ffranz-marc%2Ffranz-marc-foxes-78997.jpg&f=1"
    }, {
      author: "Franz Mark",
      text: "Cheval, peinture à l'huile",
      url: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F236x%2F09%2F22%2F1b%2F09221bba75ebe25a08ff5bd9cf759702.jpg&f=1"
    }];
  }
}

 

export default angular.module('listePosts', [
  angularMeteor
])

  .component('listePosts', {
    templateUrl: 'imports/components/techne/ListePosts.html',
    controller: ListePostsCtrl
  });

