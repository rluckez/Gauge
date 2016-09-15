'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {            
            
            $scope.filtText = '';            
            
			menuFactory.getBrands().query(
                function(response) {
                    $scope.brands = response;                    
                },
                function(response) {
					console.log("Error = ", response);
                }
			);			
			
			menuFactory.getUsers().query(
				function(response) {
					$scope.users = response;                    
				},
				function(response) {
					console.log("Error = ", response);
				}
			);
			
			menuFactory.getInteractions().query(
				function(response) {
					$scope.interactions = response;                    
				},
				function(response) {
					console.log("Error = ", response);
				}
			);

                     
			$scope.getUserById = function (id){
				for(var i = 0; i < $scope.users.length; i ++){					
					if($scope.users[i].id == id){						
						return $scope.users[i];	
					}					
				}
				return { id: 1, gender: 4};
			}
			
			$scope.getUserById = function (id){
				for(var i = 0; i < $scope.users.length; i ++){					
					if($scope.users[i].id == id){						
						return $scope.users[i];	
					}					
				}				
				return {};
			}
			
			$scope.getBrandById = function (id){
				for(var i = 0; i < $scope.brands.length; i ++){					
					if($scope.brands[i].id == id){						
						return $scope.brands[i];	
					}					
				}
				return {};
			}
			
            $scope.select = function(brandId) {
				$scope.selectedBrand = brandId;
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };    
            
        }])
;
