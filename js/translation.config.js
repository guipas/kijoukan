(function () {

  angular
    .module('kijoukan')
    .config(translation);

  function translation($translateProvider) {

    $translateProvider.translations('en', {

      //home
      'HOME_LOGIN' : 'Login',
      'HOME_PASSWORD' : 'Password',
      'HOME_SUBMIT' : 'Log in',
        
      'HOME_AVAILABLE_TOOLTIP' : 'Are you available for this event ?',
      'HOME_STAR_TOOLTIP' : 'Do you ABSOLUTELY want to participate to this show because it\'s your biggest dream ?',
      'HOME_EDIT_TOOLTIP' : 'Don\'t press this button if you\'re not the coach',

      'KJK_AVAILABLE_YES' : "Yes",
      'KJK_AVAILABLE_NO' : "No",
      'KJK_AVAILABLE_MAYBE' : "Maybe",


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
      'HOME_SUBMIT' : 'Se connecter',
                
      'HOME_AVAILABLE_TOOLTIP' : 'Es-tu disponible pour ce spectacle ?',
        'HOME_STAR_TOOLTIP' : 'Veux-tu ABSOLUMENT participer à ce spectacle parceque c\'est ton rêve le plus fou ?',
        'HOME_EDIT_TOOLTIP' : 'Pas touche a ce bouton si tu n\'es pas le coach',


      'KJK_AVAILABLE_YES' : "Oui",
      'KJK_AVAILABLE_NO' : "Non",
      'KJK_AVAILABLE_MAYBE' : "Pas répondu",


      //menu.html
      'MENU_ADD_PLAYER' : 'Ajouter/modifier des joueurs',
      'MENU_ADD_SHOW' : 'Ajouter/modifier des evenements',

      //home.html
      'ENTER_ROLE': 'Ce joueur disponible, attribuer un role : ',

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
