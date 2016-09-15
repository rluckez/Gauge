'use strict';

angular.module('confusionApp')

		.constant("baseUrl","http://localhost:4000/") 		

        .service('menuFactory', ['$resource', 'baseUrl', function($resource, baseUrl) {
    
			this.getBrands = function(){
				return $resource(baseUrl + "brands/:id", null);
			};                
			
			this.getUsers = function(){
				return $resource(baseUrl + "users/:id", null);
			};
			
			this.getInteractions = function(){
				return $resource(baseUrl + "interactions/:id", null);
			};
                        
        }])

;
