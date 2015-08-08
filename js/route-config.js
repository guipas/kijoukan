(function () {

  angular
    .module('kijoukan')
    .config(config);

  function config($routeProvider) {
    $routeProvider

      // route for the home page
      .when('/', {
          templateUrl : 'html/home.html',
          controller  : 'KJKController',
          controllerAs : 'kjk',
          resolve: {
            // controller will not be loaded until $waitForAuth resolves
            // Auth refers to our $firebaseAuth wrapper in the example above
            "currentAuth": ["Auth", function(Auth) {
              // $waitForAuth returns a promise so the resolve waits for it to complete
              return Auth.$waitForAuth();
            }]
          }
      })

      // sign in
      .when('/signin', {
          templateUrl : 'html/signin.html',
          controller  : 'SignInController',
          controllerAs : 'signinCtrl'
      })

      //add a player
      .when('/players', {
          templateUrl : 'html/players.html',
          controller  : 'PlayersController',
          controllerAs : 'playerCtrl'
      })

      //add a show
      .when('/shows', {
          templateUrl : 'html/shows.html',
          controller  : 'ShowsController',
          controllerAs : 'showCtrl'
      })
  }

})();
