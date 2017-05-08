# NOTES NINJA.JS

> *ver desafios e revisões

### 4 - Operadores de igualdade e relacionais || (Aula #01)

- sempre retorna um boolean
- =       //atribuição de valor
- ==      //serve pra testar se valores são iguais ou diferente de outros;
- !=      //determinado valor é diferente de outros numa comparação
- ===     //verifica se o tipo do dado é igual (igual a, e do mesmo tipo)
- !==     //diferente, mas do mesmo tipo
- os relacionais são os de sempre (>, <, >=, <=)

> javascript faz conversão de tipos, por isso ao comparar (==) duas variáveis, mesmo um sendo string e outra sendo number, ele retorna true.

### 8 - Operadores Lógicos (combinam ou invertem valores booleanos) || (Aula #02)

- && (and)    //combina dois valores e retorna um boolean (x === 1 && y === 2)
- || (or)     //se um ou outro valor da comparação retorna true
- ! (not)     //pouco usado, pois sempre vai junto do operador de igualdade

### 9 - Operadores Unários || (Aula #02)

> se o valor não foi um número, o operador unário vai tentar converter ele em um, se já for um number, ele não vai fazer absolutamente nada. ex: +'israel' r: NaN (number)
- operador +       //serve pra somar e também pra concatenar
- 3 + '3' //sempre que somo string com number, o JS vai entender que eu quero fazer uma concatenação e não uma soma
- a++     //is the equivalent of i = i + 1; adiciona e atribui um novo valor
- b--     //is the equivalent of i = i - 1;

### 10 - Estrutura Léxica https://goo.gl/1ub2er || (Aula #02)

> O que eu posso e o que eu não posso escrever ao criar programas usando JS?
- Case Sensitive
- Comentários: //de linha /*de bloco*/
- Literais: algo que já existe dentro da linguagem
- Identificadores: nomes de variáveis (_ ou $)

### 16 - Tipos de dados e objetos || (Aula #03)

- Tipos Primitivos (number, string, boolean, null e undefined) 
- Tipo de Objeto (todo o resto)
- Funções são objetos de primeira classe no JS
- Objeto: conjunto de propriedades que devem receber uma propriedade e um valor. A propriedade de um objeto pode receber uma outro objeto (function).

### 17 - Métodos de objeto || (Aula #03)

- POO: os objetos tem definições, propriedades, e também executam ações. Essas ações são os métodos dos objetos.
- Da mesma forma que acesso uma determinada propriedade, também atribuo um valor a ele, exemplo: propriedade.value = 'value'.

### 21 - Truthy e Falsy || (Aula #04)

- Truthy: tudo que é representado por true (boolean)
> todo o resto
- Falsy: ao converter pra boolean it's false
> false, undefined, null, NaN, 0, -0, '' ou ""
- Qual a representação booleana de determinado valor sem utilizar o if?
!!

### 22 - Condicional Ternário || (Aula #04)

- substitui o if com a seguint fórmula: 
> condição /*pergunta*/ ? true /*afirmativa*/ : false /*negativa*/;
- geralmente utilizado em instruções menores
- os valores truthy e falsy funcionam bem

### 23 - Escopo de variáveis e funções || (Aula #04)

- Escopo: local onde você declara uma variável.
- Global: variável declarada fora de uma função. E é um erro de design da linguagem.
- Local: variável criada dentro de uma função. Function cria escopo local.
- Garbage Collection: /*https://goo.gl/ZWtlKr*/
- Sempre use var para declarar uma variável, pois o JS não vai conseguir realizar o Garbage Collection por que a variável se torna global logo após a chamada da função na qual ela está inserida.
- Os argumentos de funções também são local.

### 35 - Operador virgula e estrutura condicional switch || (Aula #06)

- A vírgula separ algumas instruções e as une em algumas expressões.

```javascript
var a, b = 2, c;
function myFunc() {
    var x = 0;
    return (x += 1,x);
    //return ++x;
}
```

- O javascript retorna apenas um valor e no exemplo acima, ele atribui 1 ao valor de x e retorna x.
- switch: case utiliza o "restrict equal" (===); Atenção ao "break" ao utilizar o switch;
- Comparação de switch com if:

```javascript
switch (x) {
    case y:
    //
    break;
    case z:
    //
    break;
    default:
    //
}
if (x === 1) {
        //
    } else if (x === 2){
        //
    } else {
        //
    }
}
```

### 36 - Estrutura de repetição While || (Aula #06)

- Contador regressivo:

```javascript
var contador = 10;
while (contador > 0) {
    console.log(contador--);
}
```

### 39 - O operador módulo || (Aula #07)

- Retorna o resto da divisão (inteiro) de dois operandos.
- Imprima apenas os números pares:

```javascript
for (num = 1; num <= 20; num++) {
    num % 2 === 0 ? console.log(num) : '';
}
```

### 40 - Arrays - a propriedade length || (Aula #07)

- Arrays na verdade são objetos disfarçados.
- E como objetos eles têm propriedades e métodos.
- .length: é possível contar a quantidade de itens de um array e em conjunto com alguma estrutura de repetição 

```javascript
var aaarr = ['Mr Elliot', null, true, {name: 'MrRobot'}, function () {}]
var all = aaarr.length;
while (all > 0) {
    console.log (aaarr [ -- all]);
    if (all === 3)  {
        console.log (aaarr [all].name);
    }
}
```

### 41 - Arrays - método “push()” e Loop “for” || (Aula #07)

- .push(): adicionar um item no final do array
- Não é sustentável adicionar um novo item no array manualmente, da até pra criar uma nova variável com o item adicionado ou removido do array.
- Inclusive é possível passar função por parâmetro (programação funcional) e adicionar essa função dentro do array, invocar esse array com base no índice e passar os argumentos.

```javascript
list.push(function calc(x, y){ return x + y});
```

- For e While tem a mesma intenção apesar da sintaxe diferente.

```javascript
for (init, condition, final-expression)
for (var oneDigit = 1, twoDigits = 0; oneDigit <= 9; oneDigit++) {
    console.log(oneDigit);
    console.log(twoDigits += 10);
}
```

### 43 - Revisão Desafio semana #7

- função declarativa não precisa do ; no final, apenas se você atribuir essa função a uma variável, ai sim se faz necessário o ; no final.
- Número pares entre 10 e 20

```javascript
var contador = 10;
while (contador <= 20) {
    //contador %2 !== 0; //verificar impares
    contador %2 === 0 ? console.log (contador) : ''; //com o counter aqui nosso console vai travar por conta de adicionar um a cada entrada e ignorar o segundo parametro
    contador++;
}
```

- quanto menos "else" melhor

### 44 - A importância de nomear funções || (Aula #08)

- Parte mais importantes da linguagem: funções e objetos
- Ao nomear uma função, você facilita o debug
- As funções tem propriedades e métodos inbutidos. (ex: func.name)
- A função sem invocar () é um objeto. () é uma das formas de invocar uma função
- O que é uma função literal no JS?


### 45 - A importância de nomear funções || (Aula #08)

- Funções são objetos de primeira classe
- Tudo que você faz com objetos, você também faz com funções

```javascript
function person () {
    let info = {
        'name': 'Israel',
        'age': 31
    }
    return info;
}
```

- É possível retornar uma função a partir de uma função

```javascript
function mainAdd (a) {
    return function (b) {
        return a + b;
    };
}
var add2 = mainAdd(2);
console.log(add2(0));
console.log(mainAdd(29)(31));
```

- Assim como é possível passar variavel como parâmetro de função, é possível passar funções como parâmetro de função

```javascript
let product = {
    name  : 'celular',
    color : 'prata'
}
function getProduct(product) {
    return product;
}
console.log(getProduct(product.color))`
```

### 51 - Escopo de Funções || (Aula #09)

- Assim como uma variável tem um escopo global (var) ou local (let) bem definidos, o mesmo é válido para funções dentro de funções.
- Closure: função que consegue acessar parâmetros externos a ela.

### 52 - Hoisting || (Aula #09)

- Içamento ou elevação das funções literais (funções atribuídas a variáveis não funciona) declaradas em todo o programa
- O hoisting é feito também em variáveis, sendo declaradas inicialmente sem nenhuma atribuição, elas são apenas instânciadas.
- Ao chamar ou declarar uma função, o console retorna undefined por conta da função não retornar nada.
- Sempre ao declara uma variável, declare ela no início da função.

### 53 - IIFE (Immediately Invoked Function Expression) || (Aula #09)

- Resumo: uma função auto executável.
- Abaixo, exemplo de funções e como elas são executadas.

```javascript
function myFunc() {
    return a;
}
console.log( myFunc());

var myFunc2 = function() {
    return b;
};

console.log( myFunc2());

var myFunc3 = function yourFunc() {
    return c;
};

console.log( myFunc3());
console.log( yourFunc());
```

- Não é possível executar uma função anônima ou sem estar atribuída a uma variável.

```javascript
function () {
    return a;
}
```

- Para executar uma função, ela precisa ter ou se tornar uma expressão.
- Ao envolver a função dentro dos parênteses `()` eu transformo a função numa expressão, e para executar basta manter os `()` no final da expressão.

```javascript
(function(){
    console.log(a + b);
})();
```

- Qual a vantagem de se usar uma função auto executável (IFFE)?Evitar o uso do escopo global, que acaba por se tornar desnecessário.

> Quanto menor o escopo, mais fácil fica gerenciar o projeto.

### 58 - Wrapper Objects || (Aula #10)

- Valores primitivos não são objetos, mas o que caracteriza um objeto dentro da linguagem? Se ele tem propriedade e métodos, então ele é um objeto.

```javascript
var name = 'Israel';
name.length; // 6
```

- WO são objetos construtores, que por sua vez, criam novos objetos.
> Isso é o que a linguagem faz por baixo da camada que enxergamos:

```javascript
var name = new String('Israel');
var age = new Number(30);
var isFather = new Boolean(true);
```

- Por isso que ao invocar o método `length` a linguagem trás o resultado desejado, por que ela cria um novo objeto (wrapper), no caso do exemplo acima, um objeto do tipo string, e após retornar o resultado, ela destrói esse WO.
- Isso também ocorre porque a linguagem vai tentar converter o tipo se for necessário.

### 59 - typeof || (Aula #10)

- Utilize o typeof apenas para valores primitivos.

```javascript
function subtracao(numero1, numero2) {
    if(typeof numero1 === 'number' && typeof numero2 === 'number' || !numero1) {
        return numero1 - numero2;
    } else {
        return 'Que tal usar o teclado númerico?';
    }
}
```

- Operador unário `typeof <operand>`

```javascript
typeof undefinded // 'undefined'
typeof function(){}; // 'function'
typeof true; // 'boolean'
typeof 10; // 'number'
typeof NaN; // 'number'
typeof 'Israel' // 'string'
```

- Qualquer outro objeto que não seja uma `function` vai retornar `object`.

```javascript
typeof {}; // 'object'
typeof []; // 'object'
typeof null; // 'object'
```

> O `null` retorna um objeto por conta de um erro na linguagem, na implementação. Algo que deve ser corrigido na versão 2015 (ES6).

### 64 - Laços (loops) || (Aula #11)

- Outros tipos de loops `do` , `while` e `for in`.
- `while`: sempre verifica o valor antes de entrar no laço
```javascript
var counter = 1; // try var counter = 10
while(counter < 10) {
    console.log (counter ++);
}
console.log('counter não é mais menor que 10');
```
- `do / while`: precisa do `;` no final. Primeiro ele entra na instrução e só depois ele verifica se ela é verdadeira ou não.
```javascript
var counter = 1;
do {
    console.log (counter ++);
} while (counter < 10);
```
- `for in`: serve para percorrer propriedades de um objeto. Mais lento que o for comum, favor usar com cautela. Para coletar aos valores da propriedades, pasta realizar a consulta no formato de array.
```javascript
var monitor = {
    marca: 'LG',
    modelo: 'E2360',
    tamanho: 23
}

for( let prop in monitor) {
    console.log(prop);
    console.log(car[prop]);
}

//outra forma de usar o in

console.log('led' in monitor) //false
```

### 65 - Saltos || (Aula #11)

- `return` : sempre utilizado dentro de funções, veja abaixo um exemplo de `return` como salto. 

```javascript
function returnSalto () {
    let number = 5;
    if (number === 10) {
        return true;
    }
    return false;
}

console.log (returnSalto()); //false
```
- Repare que se o valor for verdadeiro, ele para instrução e salta o restante da função. Com isso torna-se desnecessário o `else`.

```javascript
function returnSalto () {
    let number = 10;
    if (number === 10) {
        return true;
    }
    let userName = 'raloliver';
    let yearBirth = 1985;
    return userName + ' ' + yearBirth;
}

console.log (returnSalto()); //true
```
- `break` : serve para sair da instrução, inclusive em outras instruções não apenas no switch. Normalmente utilizando no switch e em alguns casos em outros laços, como o for. Utilizado como salto para parar algumas instruções.

```javascript
for (let i = 0; i < 10; i ++) {
    if (i === 5) {
        break;
    }
    console.log(i); // 0,1,2,3,4
}

```
- `continue` : bem similar ao break, mas ao invés de sair da instrução, ele continua na próxima instrução válida. Dentro um `for` ele salta um estado.

```javascript
var arr = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < 10; i ++) {
    if (i === 5) {
        continue;
    }
    console.log(i); // 0,1,2,3,4,6,7,8,9
}

```

### 69 - Criação de Objetos || (Aula #12)

- Objetos são mutáveis e manipulados por referência: nada muda se o valor das propriedades são as mesmas e sim se a instância do objeto na memória é a mesma.
- É possível adicionar e/ou editar propriedades de um objeto.
- É possível deletar a propriedade de um objeto chamando o método `delete`
- Para criar objetos você tem as seguintes opções:
    1. Literais: obj = {}
    1. Como construtor (new): mais rápido criar um objeto literal do que criar com um construtor
    1. Com Object.create()
- Object.prototype: todos os objetos criados herdan do `Object`, exemplo: Array, Date, RegExp, String, todos eles herdam do `Object.prototype` (encadeamento de protótipos). Ele é o pai da herança dos objetos.
- 


### 70 - Criação de Objetos || (Aula #12)

```javascript
var obj = { x: 1, y: 2};
var obj2 = Object.create(obj);
obj2.x // 1
obj2.x = 'objX'
obj2.x // 'objX'
obj.x // 1

obj = Object.create({});
obj.toString() // ´[object Object]´
```
- Exemplos de métodos do `Object.prototype`:
    - .toString()
- É possível herdar valores padrões de propriedades usando o `Object.create`, assim podemos entender heranças no javascript

```javascript
obj = {}
obj.y = 2
obj.x = 1
obj2 = {}
obj2 = Object.create(obj)
obj2 // {}
obj2.y // 2
obj2.x // 1
obj3 = Object.create(obj2)
```

- Herança com Object.create() utilizando o for in para acessar as propriedades herdadas

```javascript
for (var prop in obj2) {
    console.log(prop) // x
}
```

- Mas como acessar as propriedades não herdadas? Utilize o método `hasOwnProperty`

```javascript
obj.hasOwnProperty('x') // true
obj3.hasOwnProperty('x') // false
```

```javascript
for (var prop in obj3) {
    if (obj3.hasOwnProperty(prop)) {
        console.log(prop) // undefined
    }
}
```


### 71 - Métodos de objeto || (Aula #12)

### 72 -Arrays - Métodos || (Aula #12)

>Pendências: DESAFIOS & REVISÕES