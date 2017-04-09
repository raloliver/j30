## Lesson 1: JavaScript Drum Kit

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

- Qual a difereça entre métodos, operadores, classes e construtores?

## Lesson 2: CSS + JS Clock
https://unsplash.it/1500/1000?image=881&blur=50

- Quais as possibilidades com essas duas propriedades: transform-origin, transition-timing-function & transform. *Ofereça exemplos práticos.
- *Criar um relógio analógico tipo do Pebble com temperatura e data. 
- Como converter médidas, todos os tipos possíveis. *Ofereça exemplos práticos.

## Lesson 3: Playing with CSS Variables and JS

- Update CSS Variables with JS with SASS is not possible.

- Input type color and range.

- Variáveis no CSS são definidas com dash-dash (--) e são invocadas através do valor "var(--variable)". *Ofereça exemplos práticos.
Tenha atenção ao "CSS cascade: lower scope."

- filter: quais os métodos e valores?

- Qual a diferença entre NodeList e Array?

- Porque começar com :root, porque não body?
The :root selector matches the document's root element. In HTML, the root element is always the html element.

*codepen

## Lesson 4: Array Cardio Day 1

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

## Lesson 5: Flex Panels Image (flexbox.io)

- flex: 1; // flex: 1 0 auto;
- justify-content: center;
- align-items: center;
- display: flex;
- flex-direction: column;
- transform: translateY(100%);

$this.classList.toogle('active'); // Pratica deliberada e mais métodos de classList.
.addEventListener('transitionend', function) // Pratica deliberada e mais métodos de addEventListener.

## Lesson 6: Ajax Type Ahead

fetch: nem web API for browser. This methor returns a promisse. 
fetch(callback).then() // quais as outras propriedades desse método?

Caso queira manter as constantes (const) você pode usar o .push e não apenas dar outro valor a variável.
No ES6 é possível, através spread in to a function ou num push por exemplo.

Novamente vemos o uso do filter aqui (aprenda mais sobre essa parada por favor).
.addEventListener('change') || ('keyup'); // no input, ao trocar o valor, do it something!!!
Listener: get your data first!!!

## Lesson 7: Array Cardio Day 2

.some, .every, .find, .findIndex (aprender mais sobre esses métodos)
O que é o método Reduce? Exemplo: ao invés de remover um item de uma lista, crie um novo array com determinado item removido utilizando .slice.
Porque usar as {} dentro da chamada de uma função? Exemplo: console.log({function})

## Lesson 9: 14 Must Know Dev Tools Tricks

Para acompanhar um evento, botão direito no elemento "break on" -> "attribute modifications"
> Interpolação (%s): console.log('Eu me chamo %s', 'Israel')
> Estilo (%c): console.log ('%c texto grandão, 'font-size: 5em;')
> Avisos: console.warn('Errou feio')
> Erro: console.error('Errou rude')
> Info: console.info('O Brasil é um país imenso')
> Teste: console.assert(1 === 2, 'Não!')
> Elementos do DOM: console.dir(let)
> Agrupar Informações: console.groupCollapsed('the same string') // console.grupoEnd('the same string')
> Contador: console.count();
> Tempo de resposta: console.time() // geralmente utilizado numa promise
> Tabela: console.table();
> Outros: [Willian Justen](https://willianjusten.com.br/comandos-uteis-do-chrome-devtools/)
> Outros: [letanure](http://letanure.github.io/blog/2013/08/21/usando-o-console-do-chrome/)

## Lesson 10: Hold Shift to Check Multiple Checkboxes

> ```javascript
    .addEventListener('change', function(){})
  ´´´
- .shiftKey: A Boolean, indicating whether the "SHIFT" key was pressed when the key event occured. (true - The shift key was pressed || false - The shift key was not pressed)
- .checked: Specifies whether a checkbox should be checked or not. (true - The checkbox is checked || false - Default. The checkbox is not checked)

## Lesson 11: Custom HTML5 Video Player

1. Get our elements
1. Build out functions
1. Hook up the event listeners
