(function () {

  angular
    .module('kijoukan')
    .factory('ShowsFactory', ShowsFactory);

  ShowsFactory.$inject = ['$firebaseArray','$log'];

  
  function ShowsFactory($firebaseArray,$log){

    return $firebaseArray.$extend({
      dateObjects : {},

      getDateObjects : function() {
        return this.dateObjects;
      },

      getDateObject : function(id) {
        return this.dateObjects[id];
      },

      $$added : function(snap){
        var dateObject = new Date(snap.child("date").val());
        this.dateObjects[snap.key()] = dateObject;
        return $firebaseArray.prototype.$$added.apply(this, arguments);
      },

      $$updated : function(snap){
        var dateObject = new Date(snap.child("date").val());
        this.dateObjects[snap.key()] = dateObject;
        var rec = $firebaseArray.prototype.$$updated.apply(this, arguments);
      }
    });

  }
  

})();