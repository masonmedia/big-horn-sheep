var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'page-home.html',
            controller: 'mainController'
    	})
    	.when('/about', {
    		templateUrl: 'page-about.html',
            controller: 'aboutController'
    	})
		.when('/sound', {
    		templateUrl: 'page-sound.html',
            controller: 'soundController'
    	})
		.when('/vision', {
    		templateUrl: 'page-vision.html',
            controller: 'visionController'
    	})
		.when('/dates', {
    		templateUrl: 'page-dates.html',
            controller: 'datesController'
    	})
    	.when('/contact', {
    		templateUrl: 'page-contact.html',
            controller: 'contactController'
    	});
	 // use the HTML5 History API
//        $locationProvider.html5Mode(true);
});

// This is the key to view transition happiness!
//from: https://codepen.io/mike360/pen/xjFIJ
//https://medium.com/@mike360/animating-ng-view-on-route-change-in-angularjs-9490811d0470

animateApp.run(function ($rootScope, $timeout, $window) {
  $rootScope.$on('$routeChangeSuccess', function () {
    $timeout(function () {
      $window.scrollTo(0,0);
    }, 100);
  });
});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

animateApp.controller('soundController', function($scope) {
    $scope.pageClass = 'page-sound';
});

animateApp.controller('visionController', function($scope) {
    $scope.pageClass = 'page-vision';
});

animateApp.controller('datesController', function($scope) {
    $scope.pageClass = 'page-dates';
});

animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

