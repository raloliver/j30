*ver desafios e revisões

#4 - Operadores de igualdade e relacionais || (Aula #01)
sempre retorna um boolean

=       //atribuição de valor
==      //serve pra testar se valores são iguais ou diferente de outros;
!=      //determinado valor é diferente de outros numa comparação
===     //verifica se o tipo do dado é igual (igual a, e do mesmo tipo)
!==     //diferente, mas do mesmo tipo

os relacionais são os de sempre (>, <, >=, <=)

javascript faz conversão de tipos, por isso ao comparar (==) duas variáveis, mesmo um sendo string e outra sendo number, ele retorna true.

#8 - Operadores Lógicos (combinam ou invertem valores booleanos) || (Aula #02)

&& (and)    //combina dois valores e retorna um boolean (x === 1 && y === 2)
|| (or)     //se um ou outro valor da comparação retorna true
! (not)     //pouco usado, pois sempre vai junto do operador de igualdade

#9 - Operadores Unários || (Aula #02)

se o valor não foi um número, o operador unário vai tentar converter ele em um, se já for um number, ele não vai fazer absolutamente nada.
ex: +'israel' r: NaN (number)
+       //serve pra somar e também pra concatenar
3 + '3' //sempre que somo string com number, o JS vai entender que eu quero fazer uma concatenação e não uma soma
()
a++     //is the equivalent of i = i + 1; adiciona e atribui um novo valor
b--     //is the equivalent of i = i - 1;

#10 - Estrutura Léxica https://goo.gl/1ub2er || (Aula #02)

O que eu posso e o que eu não posso escrever ao criar programas usando JS?
- Case Sensitive
- Comentários: //de linha /*de bloco*/
- Literais: algo que já existe dentro da linguagem
- Identificadores: nomes de variáveis (_ ou $)

#16 - Tipos de dados e objetos || (Aula #03)

- Tipos Primitivos (number, string, boolean, null e undefined) 
- Tipo de Objeto (todo o resto)
- Funções são objetos de primeira classe no JS
- Objeto: conjunto de propriedades que devem receber uma propriedade e um valor. A propriedade de um objeto pode receber uma outro objeto (function).

#17 - Métodos de objeto || (Aula #03)

- POO: os objetos tem definições, propriedades, e também executam ações. Essas ações são os métodos dos objetos.
- Da mesma forma que acesso uma determinada propriedade, também atribuo um valor a ele, exemplo: propriedade.value = 'value'.

#21 - Truthy e Falsy || (Aula #04)

- Truthy: tudo que é representado por true (boolean)
todo o resto
- Falsy: ao converter pra boolean it's false
false, undefined, null, NaN, 0, -0, '' ou ""
- Qual a representação booleana de determinado valor sem utilizar o if?
!!

#22 - Condicional Ternário || (Aula #04)

- https://vimeo.com/album/3345376/video/124781198

#23 - Escopo de variáveis e funções || (Aula #04)

- https://vimeo.com/album/3345376/video/124779960

#35 - Operador virgula e estrutura condicional switch || (Aula #06)

- A vírgula separ algumas instruções e as une em algumas expressões.
Ex: 
var a, b = 2, c;
function myFunc() {
    var x = 0;
    return (x += 1,x);
    //return ++x;
}
- O javascript retorna apenas um valor e no exemplo acima, ele atribui 1 ao valor de x e retorna x.
- switch: case utiliza o "restrict equal" (===); Atenção ao "break" ao utilizar o switch;
- Comparação de switch com if:
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

#36 - Estrutura de repetição While || (Aula #06)

- Contador regressivo:
var contador = 10;
while (contador > 0) {
    console.log(contador--);
}

#41 - Arrays - método “push()” e Loop “for” || (Aula #07)

- https://vimeo.com/album/3388790/video/127431910

//pendências
REVISÕES