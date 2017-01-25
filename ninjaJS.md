*ver desafios e revisões

#4 - Operadores de igualdade e relacionais
sempre retorna um boolean

=       //atribuição de valor
==      //serve pra testar se valores são iguais ou diferente de outros;
!=      //determinado valor é diferente de outros numa comparação
===     //verifica se o tipo do dado é igual (igual a, e do mesmo tipo)
!==     //diferente, mas do mesmo tipo

os relacionais são os de sempre (>, <, >=, <=)

javascript faz conversão de tipos, por isso ao comparar (==) duas variáveis, mesmo um sendo string e outra sendo number, ele retorna true.

#8 - Operadores Lógicos (combinam ou invertem valores booleanos)

&& (and)    //combina dois valores e retorna um boolean (x === 1 && y === 2)
|| (or)     //se um ou outro valor da comparação retorna true
! (not)     //pouco usado, pois sempre vai junto do operador de igualdade

#9 - Operadores Unários

se o valor não foi um número, o operador unário vai tentar converter ele em um, se já for um number, ele não vai fazer absolutamente nada.
ex: +'israel' r: NaN (number)
+       //serve pra somar e também pra concatenar
3 + '3' //sempre que somo string com number, o JS vai entender que eu quero fazer uma concatenação e não uma soma
()
a++     //is the equivalent of i = i + 1; adiciona e atribui um novo valor
b--     //is the equivalent of i = i - 1;

#10 - Estrutura Léxica https://goo.gl/1ub2er

O que eu posso e o que eu não posso escrever ao criar programas usando JS?
- Case Sensitive
- Comentários: //de linha /*de bloco*/
- Literais: algo que já existe dentro da linguagem
- Identificadores: nomes de variáveis (_ ou $)

#16 - Tipos de dados e objetos

- Tipos Primitivos (number, string, boolean, null e undefined) 
- Tipo de Objeto (todo o resto)
- Funções são objetos de primeira classe no JS
- Objeto: conjunto de propriedades que devem receber uma propriedade e um valor. A propriedade de um objeto pode receber uma outro objeto (function).

#17 - Métodos de objeto

- POO: os objetos tem definições, propriedades, e também executam ações. Essas ações são os métodos dos objetos.
- Da mesma forma que acesso uma determinada propriedade, também atribuo um valor a ele, exemplo: propriedade.value = 'value'.

REVISÕES (AULA 2 & AULA 3)

ASSISTIR (AULA 4 & AULA 5)