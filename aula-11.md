# Loops

## Laço ```do/while```

Enquanto ```while``` verificam os dados antes de entrarem no laço, o ```do``` primeiro entra na instrução e depois verifica se é verdadeiro, vejamos:

```js
//laço while
var count = 1;
while ( count < 10 ) {
    console.log( count++ );
}
//laço do
var counter = 1;
do {
    console.log( counter++ );
} while( counter < 10 );
``` 

A diferença consiste que o laço ```do/while```, sempre irá executar a instrução e depois verificará se é verdadeira.

## Laço for/in

Utilizado para percorrer as propriedades de um objeto:

```js
var car = {
    brand: 'Ford',
    model: 'ka',
    year: 2012
};

for ( var prop in car ) {
    console.log( prop );
}
```
OBS: o for in é mais lento que o for normal

## Saltos

Saltos servem para pular alguma parte de seu código javascript, um dos saltos já conhecidos é o ```return``` (que só pode ser usado dentro de funções).

```break``` também é um salto utilizado no switch, como visto anteriormente.

```continue``` é semelhante ao ```break```, mas ao invés de sair da instrução ele continua para próxima instrução válida.

Exemplo do ```continue```:

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for( var i = 0; i < arr.lenght; i++ ) {
    if( i % 2 !== 0 ) {
        continue; // nesta condição, ele pulará os números ímpares.
    }
    console.log( i );
}
```