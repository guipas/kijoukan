(function () {


	angular
	.module('kijoukan')
		.directive('kjkMenu', kjkMenu);

	function kjkMenu() {
		var directive = {
			restrict: 'EA',
			templateUrl: 'html/kjkMenu.html',
			//link: linkFunc,
			/*scope: {
		      teamId: '=team'
		    },*/
			controller: MenuController,
			controllerAs: 'vm',
	        bindToController: true // because the scope is isolated
	    };

	    return directive; 
	    /*
	    function linkFunc(scope, el, attr, ctrl) {
	    	
	    }
	    */
	}


	MenuController.$inject = ['$location','$routeParams','Auth','$log'];

	function MenuController($location,$routeParams,Auth,$log){

		var vm = this;

		vm.id = $routeParams.id;

		vm.isActive = isActive;
		vm.getFullPath = getFullPath;
		vm.idExists = idExists;
		vm.logOut = logOut;




		function isActive(path){
			return ($location.path() == path);
		}


		function idExists() {
			if(vm.id) return true;
			else return false;
		}

		function getFullPath(path) {
			if(vm.idExists())
				return "#/kijoukan/" + vm.id + path;
			else return "";
		}

		function logOut(){
			Auth.$unauth()
			.then(function () {
				$log.log("Logging out");
				$location.path("/");

			});
		}
	}

})();
