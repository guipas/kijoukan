(function () {

  angular
    .module('kijoukan')
    .config(config)
    .run(routeWatch);

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

      // sign in
      .when('/signout', {
          //templateUrl : 'html/signin.html',
          controller  : 'SignOutController',
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

  function routeWatch($rootScope,$location,Auth,fbKijoukan) {

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      //console.log("current : " + current);
      //console.log("next : " + next.templateUrl);
      var auth = Auth.$getAuth();
      if(next.templateUrl == 'html/home.html' && auth != null) {
        //$location.path( "/" );
        //console.log("Home and logged in ! ");
        
        var team = fbKijoukan.getTeamObjectFromAuthId(auth.uid);
        team.$loaded().then(function(){
          $location.path('/kijoukan/'+team.$value);
        });

      }
    });

    Auth.$onAuth(function(authData) {
      if (authData) {
        console.log("logged in as:", authData.uid);
        var team = fbKijoukan.getTeamObjectFromAuthId(authData.uid);
        team.$loaded().then(function(){
          $location.path('/kijoukan/'+team.$value);
        });
      } else {
        console.log("Logged out");
        $location.path('/');
      }
    });

  }

})();
