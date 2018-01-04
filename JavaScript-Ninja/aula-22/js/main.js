(function (win, doc) {
    'use strict'

    /**
     * Propriedades e métodos das funções
     * .name
     * .length - conta propriedade de parametros
     */
    //
    // function myFunction (a, b, c, d) {
    //     return 'olá'
    // }

    //  console.log(myFunction.length)

    /**
     * .toString
     */
    //
    // var arr = [1, 2, 3, 4]
    // var obj = { prop1: 1, prop2: 2}
    //
    // console.log(arr.toString())
    // console.log(obj.toString())
    // console.log(myFunction.toString())

    /**
     * .call
     */

     function myFunction (a, b, c) {

         console.log(this.lastName, a, b, c)
     }
     //
    //  console.log(myFunction.call())

     // com .call() podemos passar um this
     // .call(this, arg1, arg2, ... )

    //  var myLastName = new myFunction()
    //  myLastName.lastName = 'Leandrino'
    //  console.log(myLastName)
    //
    var obj = {
        lastName: 'Leandrino'
    }
    // myFunction.call(obj, 1, 2, 3) // passo o obj como this da funcção
    //

    /**
     * .apply(this, [arg1, arg2, arg3])
     * semelhante ao .call() , com .apply() passamos o this e um array de * prametros
     */

    // array de parametros
    var arr = [1, 2, 3]

    myFunction.apply(obj, arr)

})(window, document);
