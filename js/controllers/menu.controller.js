(function () {

  angular
    .module('kijoukan')
    .controller('MenuController', MenuController);

  MenuController.$inject = ['$location'];

  function MenuController($location){
    this.location = $location;
    this.isActive = function(path){
      return ($location.path() == path);
    }
  }

})();
