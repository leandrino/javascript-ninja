#Javscript Ninja - Aula 3#

##Tipos##

Tipos em JavaScript pode ser divido em duas categorias principais:
- Primitivos
  - number;
  - string;
  - bolean;
  - null e undefined;
- Objeto
  - todos os outros tipos de dados são objetos.

### Objeto

Objeto é um conjunto de propriedades.

```JavaScript
{ proriedade: 'valor' }

var objeto = { propriedade: 'valor', propriedade2: 10, propriedade3: true };
undefined
objeto
{ propriedade: 'valor',
  propriedade2: 10,
  propriedade3: true
}

// selecionando a propriedade desejada

objeto.propriedade;
// 'valor'
```

Utilizando um exemplo mais próximo, criando o objeto pessoa:
```JS
var pessoa = { nome: 'Leandro', idade: 29, peso: 95, altura: 1.70 };
pessoa.nome //Leandro
pessoa.idade //29
pessoa.peso //95
pessoa.altura//1.70
```

####Conjunto de propriedades

**functions são objetos de primeira classe**

As funções ao serem atributos de uma variável, não precisam ter um nome:

```Javascript
var myvar = function() { return 'Valor de myvar' };

/*
  Como não atribuimos nome à função, podemos chama-la
  com o próprio nome da variável, utilizando ().
*/

myvar()// 'Valor de myvar'
```

####Metodo

Adicionando propriedade em um objeto:

```Javascript
var pessoa = { nome: 'Leandro', idade: 29, altura: 1.70, peso: 95 };
pessoa.sexo = 'masculino'; //nova propriedade, sempre utilizar esta conotação
pessoa.cor = 'caucasiano'; //nova propriedade, sempre utilizar esta conotação
pessoa {
  nome: 'Leandro',
  idade: 18,
  altura: 1,7,
  peso: 95,
  sexo: 'masculino',
  cor: 'caucasiano'
}

/*
  Como não atribuimos nome à função, podemos chama-la
  com o próprio nome da variável, utilizando ().
*/

myvar()// 'Valor de myvar'
```
**Trabalhando com metodos**

```Javascript
//Utilizando a sequência do último exemplo
pessoa.andar = function(){
  return 'Pessoa andando';
};

pessoa {
  nome: 'Leandro',
  idade: 18,
  altura: 1,7,
  peso: 95,
  sexo: 'masculino',
  cor: 'caucasiano',
  andar: [function]
}

//para chamar a função, utilizamos a invocação, como na variável

pessoa.andar();
// 'Pessoa andando'

//Neste exemplo, vamos criar uma função para atribuir um ano à idade, a propriedade chamará aniversario
pessoa.aniversario = function() {
  pessoa.idade++;
};

pessoa.aniversario();

pessoa {
  nome: 'Leandro',
  idade: 19, //idade alterada, antes era 18
  altura: 1,7,
  peso: 95,
  sexo: 'masculino',
  cor: 'caucasiano',
  andar: [function],
  aniversario: [function]
}
```

#####Definição de métodos

Propriedades que recebem funções são chamadas de métodos.
