Lesson 1: 01 - JavaScript Drum Kit

DÚVIDAS
- Atributo data-*, como funciona?
1: https://goo.gl/oae3Al; 2: https://goo.gl/fxwbhv; 3: https://goo.gl/rYkfvr
2: A regra de bolso para determinar seu uso é: conteúdo que deve ser visível e acessível não deve ser armazenado no atributo data-*. A razão é que tecnologias assistivas não terão acesso aos dados e robôs de busca não os indexarão.
2: DOMStringMap prevê a propriedade dataset.
2: Usar dataset para ler dados é mais lento do que quando usa-se getAttribute().
2: https://youtu.be/On_WyUB1gOk
EX: Ler mais sobre a propriedade "content" (content: attr(data-*))

- O que é e como funciona o método forEach()?
Geralmente usado num NodeList de um querySelectorAll.

- Como funcionam "arrow functions" no ES6?

- Como funcionam "TransitionEvent"?

- Let, Var e Const, o que são e quais as diferenças? *Ofereça exemplos práticos.

- Qual a diferença do loop com for e loop com while? E se a condição do loop não for verdadeira? *Ofereça exemplos práticos.

Lesson 2: 02 - CSS + JS Clock
https://unsplash.it/1500/1000?image=881&blur=50

- Quais as possibilidades com essas duas propriedades: transform-origin, transition-timing-function & transform. *Ofereça exemplos práticos.
- *Criar um relógio analógico tipo do Pebble com temperatura e data. 
- Como converter médidas, todos os tipos possíveis. *Ofereça exemplos práticos.

Lesson 3: 03 - Playing with CSS Variables and JS

- Update CSS Variables with JS with SASS is not possible.

- Input type color and range.

- Variáveis no CSS são definidas com dash-dash (--) e são invocadas através do valor "var(--variable)". *Ofereça exemplos práticos.
Tenha atenção ao "CSS cascade: lower scope."

- filter: quais os métodos e valores?

- Qual a diferença entre NodeList e Array?

- Porque começar com :root, porque não body?
The :root selector matches the document's root element. In HTML, the root element is always the html element.

*codepen

Lesson 4: 04 - Array Cardio Day 1

ARRAY PROTOTYPE METHODS
Methods: filter, map, sort and reduce. *Ofereça exemplos de como usar "Arrows functions" with this methods.
filter: filtrar dados com base no valor de uma propriedade

map: how to use backtick and template strings?

sort: funciona com 1 e -1 para ordenar determinada lista. Como usar operadores ternários com este método?
Como ordenar uma lista em ordem alfatébica pelo sobrenome?

reduce: estude mais exemplos sobre esse incrível filtro.
- https://egghead.io/courses/reduce-data-with-javascript

Como transformar um NodeList num Array?
- Array.from() //ver como fazer isso com ES6 spread.

Como funciona o método includes()?

Como usar const [arg1, arg2]?

- console.table() //show data on table

Lesson 5: 05 - Flex Panels Image (flexbox.io)
- flex: 1; // flex: 1 0 auto;
- justify-content: center;
- align-items: center;
- display: flex;
- flex-direction: column;
- transform: translateY(100%);

$this.classList.toogle('active'); // Pratica deliberada e mais métodos de classList.
.addEventListener('transitionend', function) // Pratica deliberada e mais métodos de addEventListener.

Lesson 6: 