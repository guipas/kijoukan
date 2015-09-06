(function () {

  angular
    .module('kijoukan')
    .factory('Auth', Auth);

  Auth.$inject = ['$firebaseAuth','fbURL'];

  function Auth($firebaseAuth,fbURL){
    var ref = new Firebase(fbURL);
    return $firebaseAuth(ref);
  }

})();
