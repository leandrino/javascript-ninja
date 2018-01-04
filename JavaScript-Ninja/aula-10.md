#Javscript Ninja - Aula 10#

## Wrapper objects

Valores primitivos (números, strings, boleanos, null e undefined) não são obetos, se ele não tem propriedades e metódos ele não é um objeto.

```JS
var name = 'Meche';
name.length; // 5
```
Mas porque a váriavel name que está recebendo uma string (valor primitivo) ele tem uma propriedade? Ele retorna porque os contrutores fazem o trabalho.

### Construtores

Construtores basicamente criam novos objetos.

```js
var name = new String('Meche');
var age = new Number(30);
var ninja = new Boolean(false);
```

No exemplo acima.. o javascript fez o seguinte:

```js
var name = new String('Meche'); // mas ainda sim a variável continua sendo apenas a string 'Meche', o que ocorreu é que criou um wrapper object, para que a propriedade length execute sua função.
```

e quando não utilizamos ```new``` ele serve como um conversor:

```js
var test = String(30);
test // '30'
```

*Lembre-se, o JavaScript é uma linguagem de tipagem dinâmica, ele converte os tipos se achar necessário, é muito importante entender como funciona as conversões de valores*

## typeof

Testando tipos de valores. ```typeof``` é um operador unário que funciona ele mais um operando, exemplo: 

```js
typeof undefined; // 'undefined'
typeof function() {}; // 'function'
typeof true; // 'Boolean'
typeof 10; // 'number'
typeof NaN; // 'number'
typeof 'JS Ninja'; //string
typeof {}; //'object'
typeof[]; // 'object'
typeof null; // 'object' (erro na implementação)
```
