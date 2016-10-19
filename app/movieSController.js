(function() {
    'use strict';
    //Movie Search create controller
    angular
        .module('movieApp')
        .controller('movieSController', movieSController);

    movieSController.$inject = ['MovieService', 'toastr'];

    /* @ngInject */
    function movieSController(MovieService, toastr) {
        //variables
        var vm = this;
        vm.title = 'movieSearchController';
        vm.search;

        vm.findMovie = function(search) {
            MovieService.getMovie(vm.search)
                .then(function(response) {
                 
                    vm.movie = response;
                },function(error){
                    console.log(error);
                });
        }

    }

})();
