(function () {

  angular
    .module('kijoukan')
    .controller('PlayersController', PlayersController);

  PlayersController.$inject = ['$firebaseObject','$firebaseArray','fbRef','$log'];

  function PlayersController($firebaseObject,$firebaseArray,fbRef,$log) {

    var vm = this;

    vm.newPlayer = {};
    vm.players = $firebaseArray(fbRef.child('players/'));
    vm.alerts = [];

    vm.addNewPlayer = addNewPlayer;
    vm.updatePlayer = updatePlayer;
    vm.deletePlayer = deletePlayer;
    vm.closeAlert = closeAlert;

    function addNewPlayer() {
      var player = $firebaseObject(fbRef.child('players/'+vm.newPlayer.pseudo));
      player.$loaded(function(obj){
        $log.log(obj);
        if (obj.$value)
          vm.alerts.push({type : "danger", msg : "Un joueur avec ce pseudo existe deja"});
        else {
          player.$value = vm.newPlayer.name;
          player.$save();
          vm.newPlayer = {};
          }
      });
    };

    function updatePlayer(player) {
      $log.log("updating : " + player.$value);
      vm.players.$save(player);
    };

    function deletePlayer(player) {
      vm.players.$remove(player);
    };

    function closeAlert(index) {
      this.alerts.splice(index, 1);
    };

    this.log = function(obj) {
      $log.log(obj);
    }

    
  }


})()
