(function () {

  angular
    .module('kijoukan')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['Auth','fbKijoukan'];

  function HomeController(Auth,fbKijoukan){

  	var vm = this;

  	vm.credentials = {};
  	vm.logIn = logIn;
    vm.createAccount = createAccount;
    vm.creatingAccount = false;
    vm.newCredentials = {};
    vm.message = '';



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

    function createAccount(){
      Auth.$createUser(vm.newCredentials)
      .then(function () {
        vm.message = 'Compte créé avec succès. Vous pouvez maintenant vous identifier';
        vm.creatingAccount = false;
      });
    }

  }

})();
