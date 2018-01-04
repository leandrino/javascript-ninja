(function (win, doc) {
    'use strict'

    // if(win !== window)
    //     console.log('win é uma referência local a window')
    //     console.log('esta mensagem será sempre mostrada')

    /**
     * Metodos do window
     * Não precisa necessáriamente colocar window. para chama-los
     */

    // alert
    // win.alert('Hello!')

    // prompt
    // var name = prompt('Qual o seu nome?')
    // if(name)
    //     console.log('Seu nome é: ', name)
    // else
    //     console.log('Não respondeu')

    // confirm
    // var del = confirm('Confirma a exclusão?')
    // if(del)
    //     console.log('Confirmado', del)
    // else
    //     console.log('Cancelado', del)

    /**
     * Object window.document
     * DOM Document Object Model é a árvore do documento, contendo as tags e conteúdo de um documento HTML ou XML
     */

    /**
     * Estes médodos de document retornam um HTMLCollection, ou seja, são dinâmicos
     * a cada mutação do DOM, eles são alterados conforme o DOM atual.
     */
    // console.log(doc.getElementById('my-link'))
    // console.log(doc.getElementsByClassName('my-link'))
    // console.log(doc.getElementsByTagName('a'))
    // console.log(doc.getElementsByName('username'))

    /* Sempre que formos declarar uma variável com elementos do dom, utilizar $nomeDaVariável */
    // var $inputs = doc.getElementsByTagName('input')
    //
    // console.log($inputs.length)

    /**
     * O metodo .querySelector ou .querySelectorAll não são mutáveis conforme o DOM.
     * Sua seleção parte da forma em que declaramos no CSS (.classe #id input etc...)
     */

    var $inputs = doc.querySelectorAll('input')
    var $inputsType = doc.querySelectorAll('[type="text"]')
    var $inputsClass = doc.querySelectorAll('.my-link')
    console.log('Seleção por tag ', $inputs)
    console.log('Seleção por type ', $inputsType)
    console.log('Seleção por classe ', $inputsClass)

})(window, document);
