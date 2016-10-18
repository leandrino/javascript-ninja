(function (win, doc) {
    'use strict'
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');

    // $inputUsername.value = 'Leandrino';
    // $inputPassword.value = '123123';

    /**
     * .value é
     * getter - Obter
     * setter - atribui
     */

     /**
      * Método .addEventListener()
      * - click
      */

      $button.addEventListener('click', function (event) {
          event.preventDefault();
          console.log('clickou');

      }, false);


})(window, document);
