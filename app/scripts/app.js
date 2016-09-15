'use strict';

angular.module('confusionApp', ['ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
						controller  : 'MenuController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })          
    
        $urlRouterProvider.otherwise('/');
    })
;
