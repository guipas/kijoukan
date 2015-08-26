(function () {

  angular
    .module('kijoukan')
    .service('fbKijoukan', fbKijoukan);

  fbKijoukan.$inject = ['fbURL','fbRef','$firebaseArray','$log','ShowsFactory'];

  function fbKijoukan(fbURL,fbRef,$firebaseArray,$log,ShowsFactory){

  	var service = {
  		getShowsArray : getShowsArray,
  		getPlayersArray : getPlayersArray
  	};
    
    return service;

    function getShowsArray(teamId) {
    	var teamRef = fbRef.child(teamId);
    	return new ShowsFactory(teamRef.child('shows').orderByChild("date"));
    }

    function getPlayersArray(teamId) {
    	var teamRef = fbRef.child(teamId);
    	return $firebaseArray(teamRef.child('players'));
    }

    
  }
  

})();