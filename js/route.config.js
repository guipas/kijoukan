(function () {

  angular
    .module('kijoukan')
    .config(config);

  function config($routeProvider) {
    $routeProvider

      // sign in
      .when('/', {
          templateUrl : 'html/home.html',
          controller  : 'HomeController',
          controllerAs : 'homeCtrl'
      })



      // kijoukan planning for this team
      .when('/kijoukan/:id', {
          templateUrl : 'html/kijoukan.html',
          controller  : 'KJKController',
          controllerAs : 'kjk',
          resolve: {
            // controller will not be loaded until $waitForAuth resolves
            // Auth refers to our $firebaseAuth wrapper 
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
      .when('/kijoukan/:id/players', {
          templateUrl : 'html/players.html',
          controller  : 'PlayersController',
          controllerAs : 'playerCtrl'
      })

      //add a show
      .when('/kijoukan/:id/shows', {
          templateUrl : 'html/shows.html',
          controller  : 'ShowsController',
          controllerAs : 'showCtrl'
      })
  }

})();
