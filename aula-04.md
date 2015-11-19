#Javscript Ninja - Aula 4#

##Truthy e Falsy

Quando você precisa testar algo como ``` if ``` ele precisa ser testado com boolean (true ou false), Trutht é todo que booleanamente falando é representado por true, e falsy é representado por falsy.

Se tratando de números e valores, precisamos saber quais retornam Truthy e quais retornam Falsy.

**Falsy**
- undefined
- null
- NaN
- 0
- -0
- '' ou ""
- false

```javascript
var teste;
if ('') { teste = true; } else { teste = false; }
teste
//false
```

**Truthy**
Todos os outros.

###Descobrir a representação boolean

Com o sinal ```!!``` podemos  testar se a declaração é truthy ou falsy.

- ! - Converte pra boolean e inverte valor;
- !! - converte para boolean

```javascript
!!NaN
//false
```

##Condicional Ternário

É uma condição onde substitui o ```if``` cria uma forma mais prática de criar um if. Utilizado para valores pequenos.

```javascript
1 === 2 ? true : false;
//false
```

##Escopo de variáveis

Temos dois tipos de escopo, global e local. Escopo é o local onde declaramos a variável. Quando declaramos foda de função esta variável é global, dentro da função é local. Quando criamos uma variável dentro de uma ```function``` estamos criando uma variável local, que só poderá usar dentro desta ```function```. Quando criamos uma variável no escopo global, podemos acessa-la de qualquer function.

###Variáveis tem que iniciar por var

Por que? Simplesmente porque quando criamos uma variável, mesmo dentro de uma ```function``` , ela se tornará global e não utilizará o garbage collector do javascript. Portanto, por padrão utilizaremos a palavra chave ```var```.

###Argumentos de funções

Argumentos de função, são todas locais, ficam dentro do escopo da função.
