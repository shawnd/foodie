angular.module('slidebox.controllers', [])
.controller("IndexCtrl", ['$rootScope', "$scope",
    "$stateParams", "$q", "$location", "$window", '$timeout', 'UserHistory', 'Recipes', '$http',
    function($rootScope, $scope, $stateParams, $q, $location, $window,
        $timeout, UserHistory, Recipes, $http) {
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
    	UserHistory.all()
    		.then(function(history){
    			var hist = history;
    			console.log(hist);
    			var hist_arr = [];
		    	var rec_arr = Recipes.all();
		    	for(var i = 0; i < hist.length; i++){
		    		hist_arr.push(rec_arr[hist[i]]);
		    	}
    	    	$scope.uHistory = hist_arr;
    		});
        $scope.onSlideMove = function(data) {
        	 console.log("slide");
            //alert("You have selected " + data.index + " tab");
        };
    }
])

.controller("RecipeCtrl", ['Recipes', '$scope', '$stateParams',
    function(Recipes, $scope, $stateParams) {
    	console.log($stateParams.id);
        $scope.recipe = Recipes.get($stateParams.id);
    }
]);
