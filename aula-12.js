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