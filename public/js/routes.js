app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/gallery.html',
    controller: 'GalleryController'
  })
  .when('/honor', {
    templateUrl:'/partials/honor.html',
    controller: 'HonorController'
  }).otherwise({redirectTo:'/'});
  // $locationProvider.html5Mode(true);
});
