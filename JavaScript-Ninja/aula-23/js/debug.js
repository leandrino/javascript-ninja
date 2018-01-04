;(function (win, doc) {
    'use strict'

    function sum() {
        // debugger;
        return Array.prototype.reduce.call(arguments, function (acc, item) {
            return Number(acc) + Number(item)
        })
    }

    console.log(sum(1, 21, 32, 4))

    /**
     * Vamos utilizar um breackpoint no chrome
     */

     console.time('time')
     console.timeEnd('time')
     console.table(arr)

})(window, document)
