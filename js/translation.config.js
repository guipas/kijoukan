(function () {

  angular
    .module('kijoukan')
    .config(translation);

  function translation($translateProvider) {

    $translateProvider.translations('en', {

      //home
      'HOME_LOGIN' : 'Login',
      'HOME_PASSWORD' : 'Password',

      //menu.html
      'MENU_ADD_PLAYER' : 'Add a player',
      'MENU_ADD_SHOW' : 'Add en event',

      //home.html
      'ENTER_ROLE': 'Player available, set a role : ',

      //players.delete_button.html
      //shows.delete_button.html
      'ARE_YOU_SURE' : 'Are you sure ? ',
      'YES' : 'Yes',

      //players.html
      'ADD_PLAYER' : 'Add a Player',
      'NAME' : 'Name :',
      'PSEUDO' : 'Pseudo :',
      'MODIFY_PLAYERS' : 'Modify players',
      'MODIFY' : 'Modify',
      'DELETE' : 'Delete',

      //shows.html
      'ADD_SHOW' : 'Add a event',
      'SHOW_NAME' : "Event name :",
      'SHOW_DATE' : "Date :",
      'MODIFY_SHOW' : "Modify an event",   

      //showsController
      'UPDATE_SUCCESS' : "Event updated successfuly",
      'UPDATE_FAIL' : "A problem occured during event update attempt",

    });

 
    $translateProvider.translations('fr', {

      //home
      'HOME_LOGIN' : 'Login',
      'HOME_PASSWORD' : 'Mot de passe',

      //menu.html
      'MENU_ADD_PLAYER' : 'Ajouter un joueur',
      'MENU_ADD_SHOW' : 'Ajouter un evenement',

      //home.html
      'ENTER_ROLE': 'Joueur disponible, attribuer un role : ',

      //players.delete_button.html
      //shows.delete_button.html
      'ARE_YOU_SURE' : 'Etes vous sûr ? ',
      'YES' : 'Oui',

      //players.html
      'ADD_PLAYER' : 'Ajouter un joueur',
      'NAME' : 'Nom :',
      'PSEUDO' : 'Pseudo :',
      'MODIFY_PLAYERS' : 'Modifier les joueurs',
      'MODIFY' : 'Modifier',
      'DELETE' : 'Supprimer',

      //shows.html
      'ADD_SHOW' : 'Ajouter un evenement',
      'SHOW_NAME' : "Nom de l'evenement :",
      'SHOW_DATE' : "Date :",
      'MODIFY_SHOW' : "Modifier un evenement",

      //showsController
      'UPDATE_SUCCESS' : "Evenement mis à jour avec succès",
      'UPDATE_FAIL' : "Probleme lors de la mise a jour de l'evenement",

    });

   
    $translateProvider.preferredLanguage('fr');
  }

})();
