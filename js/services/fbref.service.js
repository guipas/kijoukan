(function () {

  angular
    .module('kijoukan')
    .service('fbRef', fbRef);

  fbRef.$inject = ['fbURL'];

  
  function fbRef(fbURL){
    return new Firebase(fbURL);
  }
  

})();