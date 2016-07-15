/**
 * Aula 14 - Javascript Ninja - ES5
 */

/**
 * Video 82 - reduce() e reduceRight() (Arrays)
 */

// reduce() - tem por finalidade reduzir um array
// array.reduce( function(x, y, z, a) {}, 0 )
// x = valor acumulado
// y = valor atual
// z = indice
// a = array
// O Reduce passa por todos os itens do array e faz a expressao que passarmos.
// O .join() concatena os n´umeros e nao soma como o reduce

console.log( 'reduce()' );
var arr = [ 1, 2, 3, 4, 5 ];
var reduce = arr.reduce( function( acumulado, atual, index, array ) {
	return acumulado + atual;
}, 0);
console.log( reduce );

/**
 * 1a. - 0 + 1 = 1
 * 2a. - 1 + 2 = 3
 * 3a. - 3 + 3 = 6
 * 4a. - 6 + 4 = 10
 * 5a. - 10 + 5 = 15
 */

var arr = [ 'L', 'e', 'a', 'n', 'd', 'r', 'o' ];
var reduce = arr.reduce( function( acumulado, atual, index, array ) {
	return acumulado + atual;
});

console.log( reduce );

// reduceRight() - ele faz o mesmo do reduce mas da direita para esquerda

console.log( 'reduceRight() ');
var arr = [ 'L', 'e', 'a', 'n', 'd', 'r', 'o' ];
var reduceRight = arr.reduceRight( function( acumulado, atual, index, array ) {
	return acumulado + atual;
});
console.log( reduceRight );

/**
 * Video 83 - indexOf(), lastindexOf() e isArray()
 */

// indexOf() - Ele procura se o valor existe no indice do array e passa sua posicao. -1 quando nao existe o indice procurado.
// o segundo parametro indica por onde sera iniciado a busca
// indexOf(primeiro, segundo)

console.log( 'indexOf()' );

var arr = [ 1, 2, 3, 4, 5 ];
console.log( arr.indexOf( 3 ) );

var arr = [ 1, 2, 3, 4, 5 ];
console.log( arr.indexOf( 3, 3 ) );

//lastindexOf() - igual o indexOf mas começa do final

console.log( 'lastindexOf()' );

var arr = [ 1, 2, 3, 4, 5 ];
console.log( arr.lastIndexOf( 3, 3 ) );

// isArray() - vai dizer se e um array ou nao. usar com o construtor Array

console.log( 'Array.isArray()' );

console.log( Array.isArray( arr ) );

/**
 * Challenge-14
 */