angular.module('slidebox.controllers', [])
.controller("IndexCtrl", ['$rootScope', "$scope",
    "$stateParams", "$q", "$location", "$window", '$timeout', 'UserHistory', 'Recipes', 'UserFavorites', '$http',
    function($rootScope, $scope, $stateParams, $q, $location, $window,
        $timeout, UserHistory, Recipes, UserFavorites, $http) {
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
    			// console.log(hist);
    			var hist_arr = [];
		    	var rec_arr = Recipes.all();
		    	for(var i = 0; i < hist.length; i++){
		    		hist_arr.push(rec_arr[hist[i]]);
		    	}
    	    	$scope.uHistory = hist_arr;
    		});

    	UserFavorites.all()
    		.then(function(favorites){
    			var favs = favorites;
    			// console.log(favs);
    			var favs_arr = [];
		    	var rec_arr = Recipes.all();
		    	for(var i = 0; i < favs.length; i++){
		    		favs_arr.push(rec_arr[favs[i]]);
		    	}
		    	// console.log(favs_arr);
    	    	$scope.uFavorites = favs_arr;
    		});

        $scope.onSlideMove = function(data) {
        	// console.log("slide");
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
