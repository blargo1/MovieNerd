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

//Comments: JK, you can remove some of the console logs after you've gotten everything working
//Comments: JKL- may want to consider naming convention issues with controllers ie 'D'controller
//Comments: nice use of varying names