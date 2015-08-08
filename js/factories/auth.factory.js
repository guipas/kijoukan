(function () {

  angular
    .module('kijoukan')
    .factory('Auth', Auth);

  Auth.$inject = ['$firebaseAuth'];

  function Auth($firebaseAuth){
    var ref = new Firebase("https://vivid-torch-4635.firebaseio.com");
    return $firebaseAuth(ref);
  }

})();
