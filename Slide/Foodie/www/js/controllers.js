angular.module('slidebox.controllers', [])
.controller("IndexCtrl", ['$rootScope', "$scope",
    "$stateParams", "$q", "$location", "$window", '$timeout', 'UserHistory', '$http',
    function($rootScope, $scope, $stateParams, $q, $location, $window,
        $timeout, UserHistory, $http) {
        $scope.tabs = [{
            "text": "History"
        }, {
            "text": "Current Meals"
        }, {
            "text": "Favorites"
        }];
        // if(UserHistory == null){
        // 	console.log("LOL");
        // }
    	$scope.uHistory = UserHistory.all();

        $scope.onSlideMove = function(data) {
        	console.log("slide");
            //alert("You have selected " + data.index + " tab");
        };
    }
])

.controller("RecipeCtrl", ['UserHistory', '$scope',
    function(UserHistory, $scope) {
        $scope.recipe = UserHistory.get($scope.id);
    }
]);
