#Javscript Ninja - Aula 9#

##Escopo de funções

Sabemos que escrever uma funão dentro de outra função no Javascript é permitido, mas como fica o *escopo* desta função?

```js
//exemplo que mostra uma função dentro de outra função
function myFunction() {
  var number1 = 1;
  var number2 = 2;
  function sum() {
    return number1 + number2;
  }
  return sum();
}
console.log( myFunction() ); //3
console.log( sum() ); // sum is not defined - ela só existe enquanto myFunction existir
```

E se as variáveis forem declaradas depois da função ```sum``` ?

```js
function myFunction() {
  function sum() {
    return number1 + number2;
  }

  var number1 = 1;
  var number2 = 2;

  return sum();
}
console.log( myFunction() ); //3
```

e neste exemplo?

```js
function myFunction() {
  var number1 = 1;
  var number2 = 2;

  return sum();

  function sum() {
    return number1 + number2;
  }
}
console.log( myFunction() ); //3
```

## Hoisting

Ou Elevação (conforme alguns autores), é responsável por 'organizar' alguns elementos dentro do escopo, como exemplos, funções literais e variáveis, a primeira ele eleva ao início do escopo, portando elas estão em todo escopo, já as variáveis, são elevadas, porém como ```undefined```, sendo seus valores passados no momento da declaração no escopo.

DICAS

Declarar variáveis no início do escopo, e return sempre finaliza as functions.

## Cloujure

No exemplo anterior temos a função `sum` que pode acessar dados externos dela, como variáveis acima.

## Um pouco mais de funções...

Tratamos de alguns assuntos, não conseguimos executar funções anonimas que não possua nome, e no exemplo abaixo, listamos algumas formas de executar funções:

```js
function sum() {
	return 1+2;
}
console.log( sum() ); //3

var sum2 = function() {
	return 3 + 2;
};
console.log( sum2() );//5

var sum3 = function otherSum() {
	return 5 + 8;
};
console.log( sum3() ); //11
console.log( otherSum() );// Not defined - A função otherSum existe apenas no escopo da variável sum3, portanto, fora deste escopo não há possibilidade de executa-la diretamente.
```

## IIFE (Immediately Invoked Function Expression)

Expressão de função executada imediatamente, ou função auto-executável. Uma das formas de criar funções auto-executáveis é utilizarmos parenteses, quando ela está dentro de parenteses ela é uma expressão.

Exemplo:

```js
(function() {
  console.log( 1 + 2 );
})(); //3
(function() {
  console.log( 1 + 2 );
}()); //3
```

As vantagens: Forçamos um escopo local, não precisamos de um escopo global. Manter o escopo local é uma boa prática do js.
