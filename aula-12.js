var obj = {
prop1: 'prop1',
prop2: 'prop2'
};

var obj2 = {
prop1: 'prop1',
prop2: 'prop2'
}

obj.prop1 = 'propriedade 1';

delete obj.prop1

obj.prop1 = 'prop1';

//Objetos são únicos, vejamos o exemplo:

var objCopy = obj;
console.log( objCopy );
console.log( obj );
objCopy.prop1 = 'Objeto alterado em objCopy';
console.log( objCopy );
console.log( obj );

//Criando objetos
//Literais
var objlit = {};
//construtor
var objConstr = new Object();
// Object = função interna javascript tem uma propriedade chamada create.
// var objObj = Object.create();

//Herança Object.create()

var obj = { x: 1, y: 2 }; //Objeto 'Pai'
var obj2 = Object.create(obj); // Objeto que irá herdar os valores do 'Pai'

obj.x = 2 //Alterando os valores do objeto pai, altero os valores do obj2
console.log( obj );
console.log( obj2 );
console.log( obj2.x );
console.log( obj2.y );

obj2.x = 'Anything'; //Alterando os valores do objeto herdado, não se altera os valores do objeto 'Pai'.
console.log( obj );
console.log( obj2 );

var obj3 = Object.create({}); //Criará um objeto vaziu, mas herdará as propriedades de Object.prototype

//exemplos de heranças

var pessoa = {
'name': 'Leandro Alexandrino',
'age': 30
}

var cliente = Object.create( pessoa );

console.log( pessoa ); //Objeto pai, a ser herdado
console.log( pessoa.name );
console.log( pessoa.age );
console.log( cliente ); //Objeto que herdou pessoa. Mas não possuí propriedades próprias.
console.log( cliente.name ); //Propriedade de cliente herdada de pessoa
console.log( cliente.age );

// exemplo de herença no for/in
for( var prop in pessoa ) {
console.log( prop ); //exibirá 'name' e 'age'
}
for( var prop in cliente ) {
console.log( prop ); //exibirá 'name' e 'age'
}

// hasOwnProperty serve para mostrar as propriedades próprias do objeto, ignorando as herdadas

console.log( pessoa.hasOwnProperty('name') );
console.log( cliente.hasOwnProperty('name') );

for( var prop in pessoa ) {
if ( pessoa.hasOwnProperty(prop) ) {
console.log( prop );
}
}

for( var prop in cliente ) {
if ( cliente.hasOwnProperty(prop) ) {
console.log( prop );
}
}

// Object.keys() - retorna as propriedades do objeto em formato de array

console.log( Object.keys(obj).length );

// .isPrototypeOf( ) - verifica se determinado objeto é protótipo de outro objeto, retorna true e false.

console.log( obj.isPrototypeOf( obj2 ) );
console.log( obj2.isPrototypeOf( obj ) );

// JSON.stringfy(obj) - Transforma um objeto em string.

console.log( JSON.stringify( obj ) ); //neste caso, ele transforma o objeto em padrão JSON.

//JSON.parser(str) - Transforma um string em objeto novamente.

var str = JSON.stringify( obj );
console.log( str );
console.log( JSON.parse( str ) );

 //Alguns tipos de objetos que não parseia
 // Mais informações sobre JSON - http://json.org/json2.js lá mostra tuod que parsei e transforma em string

 // Arrays (tem muita coisa para ver)

 //Criando itens no array.

 var arr = [];
 arr[0] = 10;
 arr[1] = 20;
 arr[2] = 20;
 arr[3] = 'cinco';
 console.log( arr );

 // .push() adiciona um ítem ao final do array.

 arr.push( 'vinte' );
 arr.push( 'vinte e um' );
 console.log( arr );

 // .pop() remover itens no final do array.

 arr.pop();
 console.log( arr );

//Alguns tipos de objetos que não parseia
// Mais informações sobre JSON - http://json.org/json2.js lá mostra tuod que parsei e transforma em string

// Arrays (tem muita coisa para ver)

//Criando itens no array.

var arr = [];
arr[0] = 10;
arr[1] = 20;
arr[2] = 20;
arr[3] = 'cinco';
console.log( arr );

// .push() adiciona um ítem ao final do array.

arr.push( 'vinte' );
console.log( arr );

// .pop() remover itens no final do array

arr.pop();
console.log( arr );

//.join junta em uma string os items e uma array aceita um parametro tbm

console.log('method join: ', arr.join());
console.log('join: ', arr.join(', '))

//.reverse inverte item do array

arr.reverse()
console.log(arr)
arr.reverse()

//.sort organiza em ordem alfabetica o array

var arrStg = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto'];
console.log(arrStg);
arrStg.sort();
console.log(arrStg);

//Challenge-12

/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

;(function(){
/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/

console.log( 'Propriedades de "person":' );
var person = {
  'name': 'Leandro',
  'lastName': 'Leandrino',
  'age': 30
};
/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/

books.push(
  {
    'name': 'Crimes de Guerra',
    'pages': 212
  },
  {
    'name': 'Arthas',
    'pages': 243
  },
  {
    'name': 'As pintas do prea',
    'pages': 12
  }
  );

console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log( books )

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log( books.pop() );


console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/

console.log( books );

/*
Converta os objetos que ficaram em `books` para strings.
*/
books = JSON.stringify( books );

console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log( books )

/*
Converta os livros novamente para objeto.
*/

books = JSON.parse( books );

console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

for( var i = 0; i < books.length; i++ ) {
  for( var prop in books[i] ) {
    console.log( prop + ': ' + books[i][prop] );
  };
};

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = [ 'L', 'e', 'a', 'n', 'd', 'r', 'o' ];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( myName.join( '' ) );

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( myName.reverse().join( '' ) );

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( myName.sort().join( '' ) );
})();
