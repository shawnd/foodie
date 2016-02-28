angular.module('slidebox.controllers', [])
.controller("IndexCtrl", ['$rootScope', "$scope",
    "$stateParams", "$q", "$location", "$window", '$timeout', 'UserHistory', 'Recipes', 'UserFavorites', 'Cart', '$http',
    function($rootScope, $scope, $stateParams, $q, $location, $window,
        $timeout, UserHistory, Recipes, UserFavorites, Cart, $http) {
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

        $scope.uCart = Cart.all();

        $scope.addItem = function(index){
            Cart.add(index);
        }



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
])

.controller("RecipeListCtrl", ['Recipes', '$scope', '$stateParams',
  function(Recipes, $scope, $stateParams) {
    var budget = 20;
    
    console.log(budget);
    var recipes = Recipes.all();
    var result = []
    for (var i= 0, n=recipes.length; i<n; i++){
      if (recipes[i].totalPrice < budget && recipes[i].totalPrice != 0) {
        result.push(recipes[i]);
      }
    }

    console.log(result);

  }
]);
