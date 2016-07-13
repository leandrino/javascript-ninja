;(function(){
/**
 * Aula 13 - Javascript Ninja ES5
 */

/**
 * Video 75
 * Arrays - toString, concat, unshift, shift
 * Arrays sao objetos disfaçados
 *
 * Eles tem propriedades e metodos
 */
console.log('Inicio video 75')

var arr = [1, 2, 3]

console.log(arr.length)
arr.push(4)

// a diferença entre .join e .toString sao os separadores do .join('- ')

console.log(arr.toString())

//concat ele concatena - une o array com alguma coisa igual ao push, porem ele nao modifica o array principal

console.log(arr.concat(5))

// .unshift adiciona um item no inicio do array
arr.push(5)
arr.push(6)
console.log(arr.push('b'))
console.log(arr.pop())
arr.unshift(0)
console.log(arr)
arr.unshift(-1)
console.log(arr)

//shif remove o primeiro item do array...
arr.shift()
console.log(arr)	


/**
 * Video 76
 * Slice e Spice
 */
console.log('Inicio video 76')

//slice - retorna um pedaço selecionado do array (x, y) x = inicio, y fim
//ele nao modifica o array principal assim como o concat

console.log(arr.slice(1))
console.log(arr.slice(2, 4))
console.log(arr.slice(0, 2))
console.log(arr.slice(-2))

//splice - ele modifica o array principal.. ele adiciona e remove itens do array e retorna o valor
// (x, y, z) 
// x = determina o inicio da inclusao ou remocao
// y = determina o fim da inclusao ou remocao
// z = adiciona os items, com base nas informacoes passadas

console.log(arr.splice(1, 3))
console.log(arr)
arr.push(3, 4, 5)
console.log(arr.splice(1, 0 , 'a', 'b', 'c', 'd'))
console.log(arr)
console.log(arr.splice(1, 4, 2, 3, 4))
console.log(arr)

/**
 * Video 77
 * forEach, every, some
 */

console.log('Inicio do video 77')

//forEach - funciona como estrutura de repetiçao mais funcional

console.log('forEach')
arr = []
arr = [1, 2, 3, 4, 5, 6, 7]
var sum = 0;
arr.forEach(function(item, index, array) {
	console.log(item, index, array)
})
arr.forEach(function (item) {
	sum += item
})
console.log(sum)

//every - predicado do array, ele retornara na funçao true ou false baseado na funcao passada por parametro. Serve para testar items e array

console.log('every')
var every = arr.every(function (item) {
	console.log('every: ', item)
	return item < 5
})

console.log(every)

//some - faz o mesmo que every, porem retornara true se pelo menos um item for verdadeiro

console.log(some)
var some = arr.some(function (item) {
	console.log('some: ', item)
	return item % 2 === 0
})

console.log(some)

/**
 * Video 78
 * map, filter
 */

console.log('Inicio do video 78')

// map - mapeia os items de um array, passando por eles e criando um novo array

console.log('.map')

var map = arr.map(function (item, index, array) {
	return item;
})
console.log(arr, map)

var map = arr.map(function (item, index, array) {
	return item + 1
})
console.log(arr, map)

var map = arr.map(function (item, index, array) {
	return { index: index, item: item }
})
console.log(arr, map)

//em forEach

var newArr = []
arr.forEach(function (item, index, array) {
	newArr.push({ index: index, item: item })
})
console.log(arr, newArr)

// filter - faz o que map faz so que filtra os items, gerando um array com as condicoes filtradas

console.log('.filter')

var filter = arr.filter(function (item, index, array) {
	return item > 2
})
console.log(arr, filter)

// Utilizando junto com .map
console.log('.map + .filter')
var map = arr.map(function (item) {
	return item + 10
}).filter(function (item) {
	return item > 15
})

console.log(arr, map)
})();
