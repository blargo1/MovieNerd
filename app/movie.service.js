(function() {
    'use strict';
    //Module name as referenced in index.html(ng-app="movieApp")/create service=======
    angular
        .module('movieApp')
        .service('MovieService', MovieService);

    MovieService.$inject = ['$http', 'toastr'];

    /* @ngInject */
    function MovieService($http, toastr) {
        this.getMovie = getMovie;
        this.getMovieDetails = getMovieDetails;

        ////////////////
        //Movie Search Functions below=================================================
        function getMovie(search) {

        	return $http({
        		method: 'GET',
        		url: 'http://www.omdbapi.com/',
        		params: {
        			s: search
        		}
        	}).then(function(allMovies)
        	{
        		return allMovies.data.Search;
        	},function(error){
        		console.log(error);
        		return error;
        	});

        }
    
        //Movie Detail Functions below=================================================
      function getMovieDetails(movieID){
      	return $http({
        		method: 'GET',
        		url: 'http://www.omdbapi.com/',
        		params: {
        			i: movieID
        		}

        	}).then(function(allMovieDetails)
        	{
        		return allMovieDetails.data;
        	});
      }
  }

})();

//Comments: 
//Comments: 
//Comments: 