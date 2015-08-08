(function () {

  angular
    .module('kijoukan')
    .controller('PlayersController', PlayersController);

  PlayersController.$inject = ['$firebaseObject','$firebaseArray'];

  function PlayersController($firebaseObject,$firebaseArray){

    var ref = new Firebase("https://vivid-torch-4635.firebaseio.com/teams/lutinsgivres");

    this.newPlayer = {};

    this.addNewPlayer = function(){
      var player = $firebaseObject(ref.child('players/'+this.newPlayer.pseudo));
      player.$value = this.newPlayer.name;
      player.$save();
      this.newPlayer = {};
    };
  }


})()
