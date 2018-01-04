/**
 * Aula 15
 */

/**
 * Video 89
 * this
 */

/**
 * This usado em metodo
 * this de objetos, referencia ao objeto, como neste caso
 * o this referencia ao myObject
 */

(function () {
	var myObject = {
		myProperty: 1,
		init: function init() {
			return this
		}
	};
	console.log(myObject.init());

		var myObject2 = {
		myProperty: 1,
		init: function init() {
			return this.myProperty;
		}
	};
	console.log(myObject2.init());

})();

/**
 * This em funçoes
 * Em funçoes ele pode ter 2 valores
 */

(function () {

// Objeto global dentro do browser ´e o window e o this, isto quando a funç~ao nao esta dentro de um objeto

	function myFunction () {
		return this;
	};

	console.log( 'this in myFunction: ', myFunction() );

// Quando chamado dentro de um objeto, o this assumira as propriedades do objeto

	var myObject = {
		myProperty: 1,
		init: function init() {
			return this;
		}
	};

	console.log( 'this in myObject: ', myObject );

// Usado em objetos estanciados

// Criando um construtor, por convençao utilizar a primeira letra maiuscula

function MyConstructor () {
	this.prop1 = 'prop1';
	this.prop2 = 'prop2';
};

var constructor = new MyConstructor();

// Neste caso, o this apesar de fazer parte do construtor MyConstructor, quando referenciamos ele com a palavra chave new, ele passa as propriedade para o objeto constructor, assumindo assim suas propriedades e o this referenciando a ele.
console.log('MyConstructor: ', constructor);

})();

/**
 * Video 90
 * arguments
 */

// arguments ´e um objeto array like, parecido, funciona como mas nao e um array.
(function () {
	function myFunction(arg1, arg2) {
		return arguments[1];
	}

	//ele retornara o ou os argumentos declarados nas funcoes
	console.log( 'arguments: ', myFunction(1, 2) );

})();