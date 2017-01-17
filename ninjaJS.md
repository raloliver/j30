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
a++     //is the equivalent of i = i + 1;
b--     //is the equivalent of i = i - 1;

#10 - Estrutura Léxica (https://goo.gl/U2wUg2)

#16 - Tipos de dados e objetos (https://goo.gl/hRgiWK)