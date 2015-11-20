#Javscript Ninja - Aula 5#

## Retorno de Funções

###Arrays

Dentro das functions, já vimos que podemos retornar valores primitivos, agora vamos ver que podemos retornrar arrays por exemplo.

```javascript
function myFunction() {
  return [1, 2, 3];
}
myFunction();
// [ 1, 2, 3 ]
myFunction()[1];
//2
myFunction()[5];
//undefined
```

###Objetos

Também podemos retornar objetos.

```javascript
function myFunction() {
  return {
    prop1: 1,
    prop2:'Leandro',
    prop3: function(){
      return 'prop3'
    }
  };
}
myFunction();
/*
{
 prop1:1
 prop2:'Leandro'
 prop3: [function]
}
*/
myFunction().prop1;
//1
myFunction().prop2;
//'Leandro'
var values = myFunction(); //Podemos atribuir estafunção em uma variável, que assumirá suas propriedades.
values
/*
{
 prop1:1
 prop2:'Leandro'
 prop3: [function]
}
*/
values.prop2;
//'Leandro'
values.prop3();
//'prop3'
```

##Parametros de funções

Trabalhando um pouco com parâmetros dentro das funções.

```javascript
var arr = [1, 2, 3];
function myFunction(arg) {
  return arg[1];
};
myFunction(arr);
//2
function myFunction2(arg) {
  return arg;
}
myFunction2([ 1, 'Leandro, true, 29']);
/*
[
  1,
  'Leandro',
  true,
  29
]
*/
```

Funciona também com objetos.

```javascript
var obj = {
  propriedade: 'Leandro',
  curso: 'Javascritp Ninja',
  ninja: true
}
function myFunction(arg) {
  return arg;
}
myFunction(obj);
//Object {propriedade: "Leandro", cruso: "Javascritp Ninja", ninja: true}
myFunction(obj).curso;
//'Javascritp Ninja'
function myFunction2(arg) {
  return arg.propriedade; //Retornará algo se houver esta propriedade.
}
myFunction2(obj);
//"Leandro"
```
#Observações#

##Objetos com propriedades string

Na correção dos exercício, foi aprofundado a forma de passar propriedades para os objetos em formato string, o no exemplo abaixo, ilustra como funciona este procedimento.

```js
function book(livro) {
  var nomesLivros = {
    'Clean Code': {
      quantidadePaginas: 200,
      autor: 'Martin',
      editora: 'Vishh'
    },
    'jQuery': {
      quantidadePaginas: 200,
      autor: 'Maujor',
      editora: 'NovaTec'
    },
    'Raulin o Comilão': {
      quantidadePaginas: 600,
      autor: 'Meche',
      editora: 'Sem editora'
    },
  };

  return !livro ? nomesLivros : nomesLivros[ livro ]; //Observe que ao chamar a propriedade do objeto, utilizamos as [] como uma array
};
```

Em resumo, utilizamos a conotação ``` . ``` por ser mais rápida, a conotação ``` [' '] ``` será utilizado em ocasiões onde a propriedade está definida como string, apesar de ser mais lenta que o ``` . ``` ela funciona nos dois casos.

##Concatenar

No exercício sugerido, podemos otimizar a digitação de conteúdo criando uma variável conforme segue:

```js
var bookName = 'Raulin o Comilão';
console.log( 'O livro ' + bookName + 'tem ' + book( bookName ).quantidadePaginas + 'páginas!');
```
