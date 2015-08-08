(function () {

  angular
    .module('kijoukan')
    .controller('KJKController', KJKController);

  KJKController.$inject = ['$scope','$firebaseArray','$firebaseObject','currentAuth','fbRef','ShowsFactory'];

  function KJKController($scope,$firebaseArray,$firebaseObject,currentAuth,fbRef,ShowsFactory){

   
    this.shows = new ShowsFactory(fbRef.child('shows').orderByChild("date"));
    this.players = $firebaseArray(fbRef.child('players'));


    this.formatDate = function(show){
      var date = this.shows.getDateObject(show.$id);
      return moment(date).format("L");
    };


    this.updatePlayerOnShow = function(player,show) {

      var childPath = "shows/" + show.$id + "/players/" + player.$id + "";
      var fbPlayers = $firebaseObject(fbRef.child(childPath));

      fbPlayers.$loaded(function(){
        if(fbPlayers.$value)
          fbPlayers.$value = false;
        else fbPlayers.$value = true;
        fbPlayers.$save();
      });
    };
  }


})();
