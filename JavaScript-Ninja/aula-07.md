#Javscript Ninja - Aula 7#

## Operador de modulo % Resto

Retorna o resto da operação de dois operandos.

```js
4/2 // 2
5%2 // 1 faz a divisão entre 5 e 2 e verifica se tem algum resto

//exemplo de mostrar apenas números pares no console

var num = 0;
while (num <= 20) {
  num % 2 === 0 ? console.log(num) : '' ;
  num++
};
```

## Um pouco mais de Arrays

São "*objetos disfarçaos*" tem propriedades e metodos.

###A propriedade length

Usado para contar quantidade de elementos das arrays, quantidade de caracteres, ou seja, é uma propriedade versáril

```js
var arr = [ 'Leandro', null, true, { bola: 'azul' }, function() {} ];
arr.length //5
```

Exemplo utilizando while.

```js
var arr = [ 'Leandro', true, null, { bola: 'azul' }, function() {} ];
var qtd = arr.length
while( qtd > 0 ) {
  console.log(arr[ --qtd ]);
}
/*
[Function]
{ bola: 'azul' }
null
true
Leandro
*/
```

```js
arr
// [ 'Leandro', true, null, { bola: 'azul' }, [Function] ]
qtd = arr.length
//5
while(qtd > 0) {
  console.log( arr[ --qtd ] );
  if ( qtd === 3 ) {
    console.log( arr[ qtd ].bola );// pegou o terceiro elemento da array 'arr' e usou a propriedade 'bola' deste elemento
  }
}
/*
[Function]
{ bola: 'azul' }
azul
null
true
Leandro
*/
```

###A propriedade .push()

 Serve para adicionar itens ao array

 ```js
var arr = [ 'Leandro', 1, null, true, 4, [gato, sapato, bola] ];
arr.push( {carro: 'Ka'} );
 ```

 ```
 Observação:
 para dicionar itens ou propriedades em um objeto fazemos
 nomedoobjeto.nomedanovapropriedade = 'ao seu valor';
 ```

##For loop

Tem por facilidade introduzir toda expressão dentro de sua própria condicional, vejamos o exemplo:

```js
for (var num = 0; num < 20; num++) {
  console.log(num);
}

```
