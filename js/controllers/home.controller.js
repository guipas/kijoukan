(function () {

  angular
    .module('kijoukan')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['Auth'];

  function HomeController(Auth){

  	var vm = this;

  	vm.auth = Auth();
  	vm.credentials = {};

  	vm.logIn = logIn;



  	function logIn(){

  	}

  }

})();
