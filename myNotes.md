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

- O que são esses métodos 1:.currentTime, 1.1.:.play.
1: https://www.schoolofnet.com/curso-multimedia/ (recomendasse o formato .mp4)
1: currentTime: When setting this property, the playback will jump to the specified position (seconds).
1.1.: play: The play() method starts playing the current audio or video. / Use the pause() method to pause the current audio/video. / Use the load() method to stop the current audio/video. The volume property sets or returns the current volume of the audio/video (value = 0|1). / he muted attribute is a boolean attribute. http://bleedinghtml5.appspot.com
Tag de video (source dentro da tag video) com os seguintes atributos controls, autoplay, muted, poster (miniatura do vídeo)
- webkitEnterFullScreen: funciona pra todos?
EX: crie um player de video completo apenas com JS.

- Como funcionam "arrow functions" no ES6?

- Como funcionam "TransitionEvent"?

- Let, Var e Const, o que são e quais as diferenças? *Ofereça exemplos práticos.

- Qual a diferença do loop com for e loop com while? E se a condição do loop não for verdadeira? *Ofereça exemplos práticos.

MAIS DÚVIDAS
- Qual a diferença de uma classe e uma instância?
- O que é uma promisse?
- Qual o método javascript para contar quantos caracteres tem numa string?
.lenght
- Qual a diferença entre null e undefined?
- Qual a representação do número 7 em binário?
- Qual a diferença de == para ===?
- Qual a diferença de microservices para monolítico?

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

Como transformar um NodeList num Array?
- Array.from() //ver como fazer isso com ES6 spread.

Como funciona o método includes()?

Como usar const [arg1, arg2]?

- console.table() //show data on table