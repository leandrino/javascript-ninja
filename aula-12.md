# Javascript Ninja - Aula 12

## Criação de Objetos

Objetos são mutáveis e são manipulados por referência.

```js
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
``` 

Os objetos podem ser mutáveis diferentes de valores literais.

Cada objeto que crio, sao objetos diferentes. Eles são manipulados por referência, exemplo de copia de objetos:

```js
var objCopy = obj;
console.log( objCopy );
console.log( obj );
objCopy.prop1 = 'Objeto alterado em objCopy';
console.log( objCopy );
console.log( obj );
obj === objCopy // true
```

Existem três formas de criar um objeto:

- Literais;
- como construtor ( new );
- com Object.create();

## ```Object.proptotype```

Protótipo de objetos, esta propriedade prototype, ela é o prototipo do objeto criado. cada vez que criamos um objeto, ele herda do prórprio protótipo as propriedade, que conseguimos acessar com ```Objetct.prototype```.

Essa herança de objetos que temos no javascript encadeamento de protótipos.

Cada objeto que criamos no Javascript, será herdado de ```Object.prototype```. Os objetos padrões que o javascript já possuí como ```Data```, ```Regex```, ```String```, ```Array```, também herdam de ```Object.prototype```.

## ```Object.create```

Vamos entender um pouco sobre as heranças.

```js
var obj = { x: 1, y: 2 }; //Objeto 'Pai'
var obj2 = Object.create(obj); // Objeto que irá herdar os valores do 'Pai'

obj.x = 2 //Alterando os valores do objeto pai, altero os valores do obj2
console.log( obj );
console.log( obj2 );

obj2.x = 'Anything'; //Alterando os valores do objeto herdado, não se altera os valores do objeto 'Pai'.
console.log( obj );
console.log( obj2 );

var obj3 = Object.create({}); //Criará um objeto vaziu, mas herdará as propriedades de Object.prototype
```

Vamos perceber que herança nos permite obter propriedades de outros objetos, e usa-las, como se fossem propriedades próprias, porém herdadas de outros objetos. Veja o exemplo:

```js
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
```

Se utilizarmos o loop ```for/in``` que aprendemos nas aulas passadas, vamos perceber que as propriedades herdadas serão exibidas:

```js
// exemplo de herença no for/in
for( var prop in pessoa ) {
    console.log( prop ); //exibirá 'name' e 'age'
}
for( var prop in cliente ) {
    console.log( prop ); //exibirá 'name' e 'age'
}
```
### hasOwnProperty() - Metodo

Serve para mostrar as propriedades do objeto, ignorando as herdadas.

```js
// hasOwnProperty serve para mostrar as propriedades próprias do objeto, ignorando as herdadas

console.log( pessoa.hasOwnProperty('name') );
console.log( cliente.hasOwnProperty('name') );

for( var prop in pessoa ) {
    if ( pessoa.hasOwnProperty(prop) ) {
        console.log( prop );//retornará 'name' e 'age'
    }
}

for( var prop in cliente ) {
    if ( cliente.hasOwnProperty(prop) ) {
        console.log( prop ); //não retornará nada
    }
}
```
### Object.keys()

Retorna as propriedades do objeto em formato de array

```js
console.log( Object.keys(obj).length ); //2
```

### `.isPrototypeOf()`

Verifica se determinado objeto é protótipo de outro objeto, retorna ```true``` ou ```false```

```js
console.log( obj.isPrototypeOf( obj2 ) ); //true
console.log( obj2.isPrototypeOf( obj ) ); //false
```

## JSON.stringfy()

Transforma determinado objeto em string padrão JSON, exemplos práticos estão no [arquivo da aula](aula-12.js), mas segue um pequeno exemplo:

```js
console.log( JSON.stringify( obj ) ); //neste caso, ele transforma o objeto em padrão JSON.
```

## JSON.parse()

Faz o caminho inverso do ```JSON.stringfy()```, transforma determinado string padrão JSON em objeto,

```js
var str = JSON.stringify( obj );
console.log( str );
console.log( JSON.parse( str ) );
```

Existe uma especificação de tipos de objetos que não são transformados pelo ```stringfy``` e ```parse```, podem ser verificados pelo site [http://json.org/json2.js](http://json.org/json2.js).

## Arrays - Criando itens.

```js  
 var arr = [];
 arr[0] = 10;
 arr[1] = 20;
 arr[2] = 20;
 arr[3] = 'cinco';
 console.log( arr );
```
 
### .push()

Adiciona um ítem ao final do array.

```js 
arr.push( 'vinte' );
console.log( arr );
```

### .pop()

Remove itens no final do array
 
```js
arr.pop();
console.log( arr );
```

[arquivo da aula](aula-12.js)