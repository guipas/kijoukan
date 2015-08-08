(function () {

  angular
    .module('kijoukan')
    .service('fbRef', fbRef);

  //fbRef.$inject = ['$firebaseArray','$log'];

  
  function fbRef(){
    return new Firebase("https://vivid-torch-4635.firebaseio.com/teams/lutinsgivres");
  }
  

})();