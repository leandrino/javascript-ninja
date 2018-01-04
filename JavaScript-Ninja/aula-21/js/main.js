(function (win, doc) {
    'use strict'

    /**
     * Sincrono - um comando após o outro;
     */

    // console.log('Síncrono', 1)
    // console.log('Síncrono', 2)
    // console.log('Síncrono', 3)
    //
    // for (var i = 4; i <= 10; i++ ) {
    //  console.log('Síncrono', i)
    // }
    //
    // console.log('Síncrono', 11)
     /**
      * Assíncrono - os eventos são um modelo assíncrono no Javascript
      * quando aguardamos a ação do usuário para executar alguma tarefa.
      * Event Loop é a fila de eventos que o JavaScript disponibiliza para nozes.
      */

    //  console.log('início')
     //
    //  doc.addEventListener('click', function () {
    //      console.log('Clickou')
    //  }, false)
     //
    //  console.log('fim')

    /**
     * .setTimeout método global
     */

    // console.log('início')
    // setTimeout(function() {
    //     console.log('executou')
    // }, 1000)
    // console.log('fim')

     /**
      * .setInterval
      */

    //   console.log('início')
    //   setInterval(function() {
    //       console.log('executou .setInterval')
    //   }, 1000)
    //   console.log('fim')

    var counter = 0
        var $button = doc.querySelector('[data-js="stop"]')
    var temporizador

    function timer () {
        console.log('Timer: ', counter++)
        if (counter > 20)
            return;
        temporizador = setTimeout(timer, 1000)
    }

    timer()

    $button.addEventListener('click', function () {
        clearTimeout(temporizador)
    }, false)

    // function timer () {
    //     console.log('Timer: ', counter++)
    // }
    //
    // setInterval(timer, 1000)


})(window, document);
