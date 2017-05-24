'use strict';

(function(){

class RatingComponent {
  constructor($http,$scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.shivMovie = [];
    this.shivRating = [];


    $scope.$on('$destroy',function(){
      socket.unsysncUpdates('rating');
    });
  }

  $onInit() {
    this.$http.get('/api/movie')
    .then(response => {
      this.shivMovie = response.data;
      this.socket.syncUpdates('Movie', this.shivMovie);
    });
    this.$http.get('/api/rating')
    .then(response => {
      this.shivRating = response.data;
      this.socket.syncUpdates('rating', this.shivRating);
    });
  }



  addRating() {
    if(this.rating == null){
      alert('Something Is Missing');
    }
    else {
    this.$http.post('/api/rating' , {
      shivMovie: this.shivMovie,
      name: this.name,
      review: this.review,
      rating: this.rating
    });
    }
}
  deleteRating(rating) {
this.$http.delete('/api/rating/'+ rating._id);
  }
}



 angular.module('yomastertemplateApp')
  .component('rating', {
    templateUrl: 'app/rating/rating.html',
    controller: RatingComponent
  });
})();
