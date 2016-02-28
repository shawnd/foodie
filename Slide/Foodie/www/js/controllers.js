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

        // $scope.uCart = Cart.all();
        var arr_cart = Cart.all();
        var cartData = [];
        var recipes = Recipes.all();
        var totalPrice = 0;
        for(var i = 0; i < arr_cart.length; i++){
            cartData.push(recipes[arr_cart[i]]);
            totalPrice += recipes[arr_cart[i]].totalPrice;
        }
        $scope.uCart = cartData;
        $scope.totalPrice = totalPrice;

        $scope.addItem = function(index){
            console.log("TESTING WHATS GOING ON");
            Cart.add(index);
            var arr_cart = Cart.all();
            var cartData = [];
            var recipes = Recipes.all();
            var totalPrice = 0;
            for(var i = 0; i < arr_cart.length; i++){
                cartData.push(recipes[arr_cart[i]]);
                totalPrice += recipes[arr_cart[i]].totalPrice;
            }
            $scope.uCart = cartData;
            $scope.totalPrice = totalPrice;
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

.controller("GroceryCtrl", ['Recipes', 'Cart', 'Ingredients', '$scope', 
    function(Recipes, Cart, Ingredients, $scope){
        console.log("GROCERY");
        var cartItems = Cart.all();
        var recipes = Recipes.all();
        var ingred_list = Ingredients.all();
        var ingredients;
        var ingredient_amt;
        var in_arr = {};
        var estimatedCost = 0;
        // console.log(recipes[cartItems[0]]["ingredientArrayName"]);
        for(var i=0; i<cartItems.length; i++){
            ingredients = (recipes[cartItems[i]]["ingredientArrayName"]);
            ingredient_amt = (recipes[cartItems[i]]["ingredientArrayAmount"]);
            for(var j=0; j<ingredients.length; j++){
                in_arr[ingredients[j]] = ingredient_amt[j];
                estimatedCost += ingred_list[ingredients[j]];
            }
        }


        console.log(in_arr);
        $scope.uIngredients = in_arr;
        $scope.estimatedCost = estimatedCost;
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
    var result = [];
    for (var i= 0, n=recipes.length; i<n; i+=2){
      if (recipes[i].totalPrice < budget && recipes[i].totalPrice != 0) {
        result.push({
          a:recipes[i],
          b:recipes[i+1]
        });
      }
    }

    console.log(result);
    $scope.result = result;

  }
]);