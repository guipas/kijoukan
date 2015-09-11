(function () {

  angular
    .module('kijoukan')
    .service('fbKijoukan', fbKijoukan);

  fbKijoukan.$inject = ['fbURL','fbRef','$firebaseArray','$firebaseObject','$log','ShowsFactory','Auth'];

  function fbKijoukan(fbURL,fbRef,$firebaseArray,$firebaseObject,$log,ShowsFactory,Auth){

  	var service = {
  		getShowsArray : getShowsArray,
  		getPlayersArray : getPlayersArray,
      getTeamObjectFromAuthId : getTeamObjectFromAuthId
  	};
    
    return service;

    function getShowsArray(teamId) {
    	var teamRef = fbRef.child("teams/"+teamId);
    	return new ShowsFactory(teamRef.child('shows').orderByChild("date"));
    }

    function getPlayersArray(teamId) {
    	var teamRef = fbRef.child("teams/"+teamId);
    	return $firebaseArray(teamRef.child('players'));
    }

    function getTeamObjectFromAuthId(authId) {
      //var auth = Auth.$getAuth();
      //if( auth == null )
      //var uid = auth.iud;
      return $firebaseObject(fbRef.child("admins/"+authId));
      
    }

    
  }
  

})();