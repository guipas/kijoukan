(function () {

  angular
    .module('kijoukan')
    .controller('ShowsController', ShowsController);

  ShowsController.$inject = ['$firebaseObject','$firebaseArray','$scope','ShowsFactory','$log','fbRef'];

  function ShowsController($firebaseObject,$firebaseArray,$scope,ShowsFactory,$log,fbRef){

    //var ref = new Firebase("https://vivid-torch-4635.firebaseio.com/teams/lutinsgivres");

    this.newShow = {};
    this.alerts = [];
    this.updateCalendarsOpen = [];
    this.shows = new ShowsFactory(fbRef.child('shows').orderByChild("date"));

    this.test = function(obj) {
      $log.log(obj);
    }


    /**
    *
    *
    *
    */
    this.updateShow = function(show){
      var newDate = this.shows.getDateObjects()[show.$id];
      var newTimestamp = newDate.getTime();
      $log.log("Add : " + newTimestamp);
      show.date = newTimestamp;
      this.shows.$save(show);
    } 


    /**
    *
    *
    *
    */
    this.deleteShow = function(show){
      this.shows.$remove(show);
    }

    /**
    *
    *
    */
    this.addNewShow = function(){

      //transform date object into timestamp to save into database
      this.newShow.date = this.newShow.date.getTime();
      this.shows.$add(this.newShow);
      this.newShow = {};

    };

    this.closeAlert = function(index) {
      this.alerts.splice(index, 1);
    };

    this.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    this.open = function($event) {
      this.opened = true;
    };

    this.openUpdateCalendar = function(id){
      //$log.log("open calendar ! ");
      this.updateCalendarsOpen[id] = true;
    }
  }

})();
