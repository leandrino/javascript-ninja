(function (win, doc) {
    'use strict'

    console.log('Array-like')

    /**
     * Array-like usam propriedades de array mas não são arrays
     * - arguments
     * - node Lists
     * - elementos html
     * eles não Herdam do Array.prototype
     */

    function myFuncArr () {
        var arr = [1, 2, 3, 4, 5, 6]
        arr.forEach(function(item) {
            console.log('usando um array de verdade com forEach()', item)
            console.log(this)
        }, arguments) // o segundo parametro do forEach, map ... é o this
    }
    myFuncArr(1, 2, 3, 4)

    // arguments, como todo array like, não possuí as propriedades do Array.prototype, aqui vamos aprender a 'enganar' o javascript para utiliza-los

    function myFunction () {
        Array.prototype.forEach.call(arguments, function (item, index) {
            console.log('usando forEach em um array-like, o arguments: ', item )
            console.log(this)
        }, arguments) // parametro é o this
    }

    myFunction('a', 'b', 'c')
})(window, document);
