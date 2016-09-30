(function() {
    'use strict'
    console.log('com "use strict"');
    /**
    * Aula de 'use strict'
    * - diretiva inserida na ES5
    * O JavaScript tem problemas como declarações de variaveis.
    */

    /**
    * Criação de variável sem o var a torna global mesmo em um IIFE
    * com 'use strict' ele lança referenteerror para algumas ocasições, como criação de variável em escopo global.
    */

    /**
    * use strict não permite o uso de with
    * pq as propreidades podem se confundir com variáveis, por isso não usamos with
    */

    /**
    * THIS fora de um objeto tem escopo global
    * como no exemplo da aula anteior, se não instanciamos o objeto person, apenas invocamos a função ele retornará as propreidades como variáveis globais.
    * o use strict não permite que o this passe para o escopo global.
    * o this se torna undefined
    * Resumindo, this fora do modo strict é windows(global)
    * this dentro do modo strict é undefined se não instanciado.
    */
    console.log( this );

    /**
    * No modo strict o "delete" que não puder ser concluído sera qualificado como syntaxe error.
    * sem o modo strict ele apenas é false.
    * delete serve para deletar propriedde de objetos.
    */

    // var variavel = 2;
    // console.log( delete variavel, variavel );

    /**
    * No Use Strict, as propriedades de objetos deverá ter nomes diferentes
    * sem o modo strict o último valor será o retornado.
    * ele dá o syntaxeError
    */

    /**
    * No Use Stricts, argumento de funções também devem ter nomes diferentes
    * sem o strict mode, ele ignora e assume o último.
    * SyntaxeError
    */

    /**
    * Objeto String - Propriedades e metodos muito semelhante ao arrays;
    * .lenght = conta quantidde de caracteres em uma string
    */

    console.log('Leandro'.length);
    //é igual a: (ele faz o wrapper)
    var nome = new String('Leandro');
    console.log(nome.length);

    /**
    * Métodos
    * charAt(index)
    */

    console.log('Leandro'.charAt(1));
    console.log('Leandro'[0]);

    /**
    * .concat(str1, str2 ...)
    * não altera o objeto.
    */

    console.log('Leandro'.concat(' Meche', ' Leandrino'));

    /**
    * .indexOf(string [,start])
    */

    console.log('Leandro'.indexOf('r'));
    console.log('Leandro'.indexOf('x')); //não existe

    /**
    * .lastIndexOf(string, [,start])
    * busca de trás pra fente
    */

    console.log('Leandro'.indexOf('r'));

    /**
    * .replace(string, newString)
    * achou a regra uma vez, e acaba
    */

    console.log('Leandro'.replace('r', 'x'));

    /**
    * .slice(start ´[,end])
    */

    console.log('Leandro'.slice(2, 4));

    /**
    * .split([separator] [, limit])
    * usando join volta a ser string
    */

    console.log('Leandro'.split());
    console.log('Leandrino'.split('n'));
    console.log('Leandrino'.split('n').join('z'));

    /**
    * .substring(start [, end])
    * semelhante ao slice
    */

    console.log('Leandrino'.substring(4));
    console.log('Leandrino'.substring(6, 4));

    /**
     * .toLowerCase()
     */

    console.log('Leandrino'.toLowerCase());

    /**
     * .toUpperCase()
     */

    console.log('Leandrino'.toUpperCase());
    var myName = 'leandrino';
    var newName = myName.charAt(0).toUpperCase() + myName.slice(1);
    console.log(newName);


})();

/**
 * Sem use strict
 */

(function() {
    console.log('sem "use Strict"');
    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'propriedade3.1',
                    prop32: 'propriedade3.2',
                    prop33: 'propriedade3.3'
                }
            }
        }
    }
    with ( obj.prop1.prop2.prop3 ) {
        console.log( prop31 )
    }

    function Person( name, lastName ) {
        this.name = name;
        this.lastName = lastName;
    }

    console.log( this );
    console.log( Person('Leandro', 'Leandrino') );
    console.log(name);

})();
