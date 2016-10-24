(function (win, doc) {
    'use strict'

    console.log('prototypes')

    /**
     * Os prototypes já são propriedades que vem com os metodos,
     * Quando utilizamos o prototype, extendemos a função como no exemplo:
     */

    // crio a função contrutora
    function MyName (name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    // adiciono via prototype um metodo a funcção (extendo MyName para fullName)
    MyName.prototype.fullName = function () {
        return this.name + ' ' + this.lastName
    }

    // instancio a varivel leandro com a funçaõ MyName passando os parametros name e lastName
    var leandro = new MyName('Leandro', 'Leandrino')

    // adiciono após instanciar a propriedade age, e funcionará.

    MyName.prototype.age = 30

    // chamo leandro que agora tem a propriedade da função construtora MyName chamada .fullName()
    console.log(leandro.fullName())
    console.log(leandro.age)

})(window, document);
