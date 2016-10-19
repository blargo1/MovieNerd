(function() {
    'use strict';
    //Movie Detail controller
    angular
        .module('movieApp')
        .controller('movieDController', movieDController);

    movieDController.$inject = ['MovieService', '$stateParams', 'toastr'];

    /* @ngInject */
    function movieDController(MovieService, $stateParams, toastr) {
        var ben = this;
        ben.title = 'movieSearchController';
        ben.findMovieDetail = findMovieDetail;
        var imdbID = $stateParams.movieDetailID;
        activate();
        ////////////////
        function activate() {
            findMovieDetail(imdbID);
        }

        //console.log(imdbID);   
        function findMovieDetail(movieID) {
            MovieService.getMovieDetails(imdbID).then(function(response) {

                ben.finalMovieDetail = response;
                //console.log(ben.finalMovieDetail);
            });

        }

    }





})();

//Comments: 
//Comments: 
//Comments: 