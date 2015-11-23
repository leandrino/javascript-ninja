#Javscript Ninja - Aula 6#

## Operador vírgula e estrutura condicional

###Operador vírgula

A vírgula irá separar algumas instruçõs e juntar em uma única expressão.

```js
var a, b = 2, c; //Neste exemplo declaramos três variáveis em uma única expressão, var a; var b = 2; var c;
function myFunc(){
  var x = 0;
  return (x += 1, x) //o JS faz as operações da esquerda para direita, essa expressão é igual a return ++x (pré incremento)
};
```

Mas será que é ele utiliza o ```var``` antes das declarações? Vamos testar, lembrando que declarando as variáveis dentro de uma function, ela se torna local,  se não tulizarmos o termo ```var``` antes da declaração, ela se tornará global.

```js
function myFunc() {
  var a = 10, b = 100, c = 1000;
  return [a, b, c]; //retornarei uma array com as três variáveis.
};
myFunc();
//[10, 100, 1000]
a; //Retorna que não foi encontrada
b; //Retorna que não foi encontrada
c; //Retorna que não foi encontrada
//essa é a prova de que foi utilizado o termo ```var``` antes das declarações.
```

###Estrutura condicional

Conhecemos ```If``` e ```ternário``` vamos conhecer mais um.

####switch

Sua utilização é feita para comparação de valor caso for ```===``` ao valor comparado.
//perguntar sobre o default:

```js
function myFunc(x) {
  switch (x) {
    case 1:
      console.log('x é 1.');
      break; // importante, caso não coloque o break ele continua fazendo os testes mesmo que seja verdadeiro
    case 2:
      console.log('x é 2.');
      break; // importante, caso não coloque o break ele continua fazendo os testes mesmo que seja verdadeiro
    default:
      console.log('x não é 1 e nem 2.');
  }
};
```

##Estrutura de repetição. (LOOP)

###While

Enquanto for verdadeiro a expressão ele irá repetir o procedimento.

```js
var count = 0;
while (count < 10) {
  console.log(count);
  count++;
}
```

Mais alguns exemplos.

Neste exemplo, estamos tratando um valor *falsy*, o 0, quando o ```while``` chega em 0 ele assume ```false``` e para o loop.

```js
var count = 10;
while (count > 0) {
  console.log(count--);
}
```

```js
var count = 10;
while (count--) {
  console.log(count);
}
```
