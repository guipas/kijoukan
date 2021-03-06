(function () {

  angular
    .module('kijoukan')
    .controller('PlayersController', PlayersController);

  PlayersController.$inject = ['$routeParams','$firebaseObject','$firebaseArray','fbRef','$log','fbKijoukan'];

  function PlayersController($routeParams,$firebaseObject,$firebaseArray,fbRef,$log,fbKijoukan) {

    var vm = this;

    vm.newPlayer = {};
    //vm.players = $firebaseArray(fbRef.child('players/'));
    vm.players = fbKijoukan.getPlayersArray($routeParams.id);
    vm.alerts = [];

    vm.addNewPlayer = addNewPlayer;
    vm.updatePlayer = updatePlayer;
    vm.deletePlayer = deletePlayer;
    vm.closeAlert = closeAlert;

    function addNewPlayer() {
      //var player = $firebaseObject(fbRef.child('/players/'+vm.newPlayer.pseudo));
      // var player = $firebaseObject(vm.players.$ref().child(vm.newPlayer.pseudo));
      // player.$loaded(function(obj){
      //   $log.log(obj);
      //   if (obj.$value)
      //     vm.alerts.push({type : "danger", msg : "Un joueur avec ce pseudo existe deja"});
      //   else {
      //     player.$value = vm.newPlayer.name;
      //     player.$save();
      //     vm.newPlayer = {};
      //     }
      // });
      // console.log(vm.players);
      //vm.players.$add(vm.newPlayer.pseudo);
      vm.players.$add(vm.newPlayer.name);
      vm.newPlayer = {};
      //vm.players.$save();



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
