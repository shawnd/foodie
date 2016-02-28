var app = angular.module('slidebox', ['ionic', 'tabSlideBox'])
    .run(['$q', '$http', '$rootScope', '$location', '$window', '$timeout',
        function($q, $http, $rootScope, $location, $window, $timeout) {

            $rootScope.$on("$locationChangeStart", function(event, next,
                current) {
                $rootScope.error = null;
                console.log("Route change!!!", $location.path());
                var path = $location.path();


                console.log("App Loaded!!!");
            });
        }
    ]);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        url: '/',
        templateUrl: 'index.html',
        controller: 'IndexCtrl'
    });

    $stateProvider.state('recipe', {
        url: '/recipe',
        templateUrl: 'recipe.html'
    });

    $stateProvider.state('search', {
        url: '/search',
        templateUrl: 'search.html'
    });

    $stateProvider.state('results', {
        url: '/results',
        templateUrl: 'results.html'
    });

    $stateProvider.state('grocerylist', {
        url: '/grocerylist',
        templateUrl: 'groceries.html'
    });

    $urlRouterProvider.otherwise("/");
});
app.controller("IndexCtrl", ['$rootScope', "$scope",
    "$stateParams", "$q", "$location", "$window", '$timeout',
    function($rootScope, $scope, $stateParams, $q, $location, $window,
        $timeout) {
        $scope.tabs = [{
            "text": "History"
        }, {
            "text": "Current Meals"
        }, {
            "text": "Favorites"
        }];
        $scope.onSlideMove = function(data) {
            //alert("You have selected " + data.index + " tab");
        };
    }
]);