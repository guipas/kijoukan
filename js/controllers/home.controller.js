(function () {

  angular
    .module('kijoukan')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['Auth','fbKijoukan'];

  function HomeController(Auth,fbKijoukan){

  	var vm = this;

  	vm.credentials = {};

  	vm.logIn = logIn;



  	function logIn(){
        Auth.$authWithPassword(vm.credentials)
        .then(function(authData) {
          //console.log("Logged in as:", authData.uid);
          //fbKijoukan.getTeamObjectFromAuthId(authData.uid);
        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });
        vm.credentials = {};
            
  	}

  }

})();
