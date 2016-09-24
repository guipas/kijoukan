(function () {

  angular
    .module('kijoukan')
    .controller('KJKController', KJKController);

  KJKController.$inject = ['$routeParams','$firebaseArray','$firebaseObject','currentAuth','fbRef','ShowsFactory','$log','$translate','fbKijoukan'];


  function KJKController($routeParams,$firebaseArray,$firebaseObject,currentAuth,fbRef,ShowsFactory,$log,$translate,fbKijoukan){

    var vm = this;

    vm.shows = fbKijoukan.getShowsArray($routeParams.id);
    vm.players = fbKijoukan.getPlayersArray($routeParams.id);

    vm.availabilities = {// all possible availability states
      yes : true,
      no : false,
      maybe : "maybe"//"i dont know... can you repeat the questioooon
    };

    vm.displayDate = displayDate;
    vm.updatePlayerOnShow = updatePlayerOnShow;
    vm.displayDay = displayDay;
    vm.displayMonth = displayMonth;
    vm.displayYear = displayYear;
    vm.updateRoleForPlayer = updateRoleForPlayer;
    vm.starPlayerOnShow = starPlayerOnShow;
    vm.getCounter = getCounter;
    vm.datePassed = datePassed;

    /* jQuery effects */
    $(window).scroll(function(){
      $('.names').css({
          'left': $(this).scrollLeft()
      });
    });


    function displayDate(show) {
      var date = vm.shows.getDateObject(show.$id);
      return moment(date).format("dddd Do MM YYYY");
    };

    function displayDay(show) {
      return _getShowMoment(show).format("ddd Do");
    };

    function displayMonth(show) {
      return _getShowMoment(show).format("MMM");
    };

    function displayYear(show) {
      return _getShowMoment(show).format("YYYY");
    };

    function _getShowDate(show) {
      return vm.shows.getDateObject(show.$id);
    };

    function _getShowMoment(show) {
      return moment(_getShowDate(show));
    };

    //has the show been played or is it a future show ?
    function datePassed(show) {
      return (_getShowDate(show).getTime() < Date.now());
    }

    function updateRoleForPlayer(player,show) {
      //$log.log(vm.shows[show.$id].roles);
      vm.shows.$save(show);
    };

    function getCounter(player) {
      //$log.log(playerId);return;
      //if(player.$id!=="joseph") return;
      var yes = no = maybe = played = 0;
      vm.shows.forEach(function(show,i,shows){
      	if(datePassed(show)) {// count only already played show
			   if(show.players && show.players[player.$id]===true) yes++;
			   else if(show.players && show.players[player.$id]===false) no++;
			   else no++;

			   if(show.roles && show.players && show.players[player.$id]===true && show.roles[player.$id]) played++;
			   //$log.log(""+player.$id+" -> "+show.players[player.$id]);
      	}
      });
      return {
        yes : yes,
        no : no,
        maybe : maybe,
        played : played
      }
    };

    function updatePlayerOnShow(player,show) {

      /*
      var childPath = "shows/" + show.$id + "/players/" + player.$id + "";
      var fbPlayers = $firebaseObject(fbRef.child(childPath));

      fbPlayers.$loaded(function(){
        if(fbPlayers.$value)
          fbPlayers.$value = false;
        else fbPlayers.$value = true;
        fbPlayers.$save();
      });
      */
      vm.shows.$save(show);


    };

    function starPlayerOnShow(player,show){

      if(!show.stars) show.stars = {};

      if(show.stars[player.$id]){
        show.stars[player.$id] = false;
      }
      else show.stars[player.$id] = true;

      vm.shows.$save(show);
    }
}


})();
