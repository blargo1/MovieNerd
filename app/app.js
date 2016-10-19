(function() {
    'use strict';
    var movieApp = angular.module('movieApp', ['ui.router', 'toastr']);
    movieApp.config(function($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/state1');
    
    	// Home States/nested views in /app/partials folder==============================
        // Set up the states below
    	// State for search==================================================================
    	$stateProvider
    	.state('state1', {
    		url: "/state1",
    		templateUrl: "/app/partials/state1.html",
    		controller: "movieSController",
    		controllerAs: "vm"

		})

    	// State for detail==================================================================
		.state('state2', {
            url: "/state2/:movieDetailID",
    		templateUrl:'/app/partials/state2.html',
            controller: "movieDController",
            controllerAs: "ben"

		});
    });
        
})();

//Comments: JK- go ahead and make use of toastr or remove it
//Comments: JKL- looks good
//Comments: SA - ditto to toastr, love the ben controller