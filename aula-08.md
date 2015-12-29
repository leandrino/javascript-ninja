#Javscript Ninja - Aula 8#

##Funções

É uma das partes mais importantes da linguagem, nesta aula vamos nos aprofundar sobre o tema.

###Está na hora de nomear as funções

```js
var func = function func() {
};
```

*Mas porque?*

Facilita o debug :), o Debugger (do NodeJS ou Browser) ele vai utilizar o nome da função para poder debugar. 

Como tipo de objeto no javascript, ela pode ter propriedades e metodos.

####Propriedade .name

Serve para trazer o nome da função conforme exemplos:

Sem nomear:
```js
var func = function() {
    return 'hi';
}

func(); //'hi'
func.name; // ''
```

Nomeado:
```js
var func = function func() {
    return 'hi';
};
func() //'hi'
func.name //'func'

/*
    EXEMPLO COM FUNCTION LITERAL
*/

function myFunction() {
    return 'Função literal declara';
}
myFunction.name // 'myFunction'
```

Tudo isto não significa que não usaremos mais funções literais, que por sinal é um recurso interessante da linguagem, mas quando formos atribuir uma função para variável, sempre vamos nomear esta função, em sua maioria, mas devemos atentar à sua usabilidade.

# FUNCTIONAL PROGRAMMING - Programação funcional no JavaScript

É uma forma de programar baseados em funções, ou nas características que as funções tem.

**Funções no JavaScript são 'cidadãos' de primeira classe**

significa que as funções tem o mesmo tratamento que os objetos na linguagem, tudo o que você faz com os objetos no JavaScript, você faz com as funções. Isto permite trabalharmos com a forma funcional.

===============
{} <3 function() {}
===============

##Funções Literais

Objeto Literal de exemplo:
```js
var car = {
    brand: 'Chevrolet',
    model: 'Silverado'
}
```

Função Literal de exemplo:
```js
fumction sum(x, y) {
    return x + y;
}
```

##Funções como variáveis

Da mesma forma que podemos adicionar objetos à variáveis, podemos adicionar funcções:

```js
var func = function func() {};
```

##Retorno de objetos dentro de fuções

Podeos retornar um objeto dentro de uma função: 

```js
function person() {
    var info = {
        name: 'Leandro',
        lastName: 'Meche'
    };
    return info
}
```

##Retorno de funções diretamente de outras funções :)

Isto é o poder que uma linguagem funcional pode fazer !!!

```js
function adder(x) {
    return function(y) {
        return x + y;
    };
}
var add2 = adder(2);
console.log( add2(3) ); //5
console.log( adder(10)(2) ); //12 - forma direta de chamar
```

##Objetos por parâmetros

Conforme exemplo abaixo, também podemos passar os objetos por parametros dentro das funções:

```js
var car = {
    color: 'yellow'
};

function getCarColor(mycar) {
    return mycar.color;
}

console.log( getCarColor(car) );
```

No caso a seguir, estaremos passando dentro da primeira função a execução de outra determinada função, vamos ver como funciona?

```js
function showOtherFunction(func) {
    return func();
}

function returnedFunction() {
    return 'Returned function';
}

console.log( showOtherFunction( returnedFunction ) );
```

Nas funções acima, utilizamos ```showOtherFunction``` executará a função ```returnedFunction``` exibindo em tela 'Returned function'.

