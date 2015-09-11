(function () {

  angular
  .module('kijoukan')
  .controller('ShowsController', ShowsController);

  ShowsController.$inject = ['$firebaseObject','$firebaseArray','$scope','ShowsFactory','$log','fbRef','fbKijoukan','$translate','$routeParams'];

  function ShowsController($firebaseObject,$firebaseArray,$scope,ShowsFactory,$log,fbRef,fbKijoukan,$translate,$routeParams){

    vm = this;

    vm.newShow = {};
    vm.alerts = [];
    vm.updateCalendarsOpen = [];
    vm.mainCalendarOpened = false;
    //vm.shows = new ShowsFactory(fbRef.child('shows').orderByChild("date"));
    vm.shows = fbKijoukan.getShowsArray($routeParams.id);

    vm.updateShow = updateShow;
    vm.deleteShow = deleteShow;
    vm.addNewShow = addNewShow;
    vm.closeAlert = closeAlert;
    vm.openUpdateCalendar = openUpdateCalendar;
    vm.openCalendar = openCalendar;
    vm.test = test;


    function test(obj) {
      $log.log(obj);
    }


    /**
    *
    *
    *
    */
    function updateShow(show) {
      var newDate = vm.shows.getDateObjects()[show.$id];
      var newTimestamp = newDate.getTime();
      show.date = newTimestamp;

      vm.shows.$save(show)
      .then( function(data) {
       $translate('UPDATE_SUCCESS').then(function(message){
        vm.alerts.push({type:"success",msg:message});
      }); 
     }) 
      .catch(function(error) {
        var message = "Problème lors de la mise a jour de l'evenement : '" + error + "'";
        vm.alerts.push({type: "danger", msg: message});
      });
    } 


    /**
    *
    *
    *
    */
    function deleteShow(show) {
      vm.shows.$remove(show)
      .then(function(data) {
        vm.alerts.push({type:"",msg:"Evenement supprimé succès"});
      })
      .catch(function(error) {
        var message = "Problème lors de la suppression de l'evenement : '" + error + "'";
        vm.alerts.push({type: "danger", msg: message});
      });
      
    }

    /**
    *
    *
    */
    function addNewShow() {

      //transform date object into timestamp to save into database
      vm.newShow.date = vm.newShow.date.getTime();
      vm.shows.$add(vm.newShow)
      .then(function(data) {
        vm.alerts.push({type:"success",msg:"Evenement ajouté avec succès"});
        vm.newShow = {};
      })
      .catch(function(error) {
       var message = "Problème lors de l'ajout de l'evenement : '" + error + "'";
       vm.alerts.push({type: "danger", msg: message});
     });
    };

    function closeAlert(index) {
      vm.alerts.splice(index, 1);
    };

    vm.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    function openCalendar($event) {
      vm.mainCalendarOpened = true;
    };

    function openUpdateCalendar(id) {
      //$log.log("open calendar ! ");
      vm.updateCalendarsOpen[id] = true;
    }
  }

})();
