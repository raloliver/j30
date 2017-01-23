PLAYGROUND (usar Skeuomorphism)
- EX: crie um player de video completo apenas com JS (como um log de play/pause/stop e integrado ao Google Drive).
- Criar um relógio analógico tipo do Pebble com temperatura e data. 
- Crie um mockup de cartão de crédito igualzinho ao um origianl, só que com um validador genérico e os locais de cada item, trocando a depender da bandeira.
- Pegue um JSON de uma lib qualquer e filtro diversos produtos de diversas categorias (use as lojas de SAJ)
- Quais as possibilidades com essas duas propriedades: transform-origin, transition-timing-function & transform. *Ofereça exemplos práticos.
- Let, Var e Const, o que são e quais as diferenças? *Ofereça exemplos práticos.
- Qual a diferença do loop com for e loop com while? E se a condição do loop não for verdadeira? *Ofereça exemplos práticos.
- Methods: filter, map, sort and reduce. *Ofereça exemplos de como usar "Arrows functions" with this methods.
$this.classList.toogle('active'); // Pratica deliberada e mais métodos de classList.
.addEventListener('transitionend', function) // Pratica deliberada e mais métodos de addEventListener.
- localStorage.setItem(id): verificar mais métodos do localStorage
- Converter timing do vídeo de segundo para hh:mm:ss e do volume para %.

REVISÕES
- NinjaJS: todas as revisões de aula.
- Video HTML5: 07_events
- Todos os tipos de Ordenação de lista em javascript
- Todos os tipos de Validação de formulário em javascript
- Math: treinar mais esse método.
- append e after: Ver mais sobre esses métodos.
- Methods: filter, map, sort and reduce. O que o ".join" faz no ".map"?
- Como colocar uma variável numa experessão regular?
const regex = new RegExp(wordToMatch, 'gi');
- Praticar mais new RegExp!
- Operador Condicional (ternário): praticar.
- Service Workers: que porra é essa? 
- Push notification com o site fechado? 
- Como fazer o app funcionar offline e depois subir as informações ao acessar a internet?
- Como acessar o hardware do aparelho usando apenas javascript.
- Qual a diferença de uma classe e uma instância?
- O que é uma promisse?
- Qual o método javascript para contar quantos caracteres tem numa string?
.lenght
- Qual a diferença entre null e undefined?
O JS sempre deve retornar algo, e nesse caso do null e undefined, é um erro de design da linguagem, não faz tanta diferença um do outro, mas você pode tratar esses valores indefinidos de maneiras diferentes.
- Qual a representação do número 7 em binário?
- Qual a diferença de == para ===?
== compara valor, e === compara valor e tipo.
- Qual a diferença de microservices para monolítico?

- webkitEnterFullScreen: funciona pra todos?
- .push é usado apenas em valores do tipo array?
- Como funciona o "for" no JS?
- .innerHTML ainda deve ser utilizado?
- Como funciona o onkeyup dentro de um input?

G SUITE
- Youtube/Drive API: criar um player de vídeo que usa a autorização do Google para Login e acesso aos arquivos (ou até mesmo a conta do Youtube) com a opção de criar um vídeo apenas incluindo o link do arquivo, ou apenas selecionando o arquivo e gerar um iframe para embed externo sem exibir a logo do Youtube.
- Criar um gerenciador de arquivos usando a API do Google Drive, disponibilizando arquivos enviado ao google drive apenas para determinados usuários logados e com a limitação de 5 downloads. Além disso, deixar a opção de conectar apenas uma conta, mas se pagar, pode conectar mais contas e somar o volume de dados de todas as contas, com um único gerenciadouro de arquivos.
- Cópia do Pluto: usando a API do youtube, criar um webapp que consome os dados do youtube e agenda os horarios das playlist e de determinado canal. Mais uma vez pedindo altorização do client para logar com a conta do youtube, ver canais inscritos, e acessar a playlist desses canais. Com base em determinada palavra ou playlist, os vídeos são exibidos numa grande, como na grade da Sky.
- Extensão do Google Chorme (REST/Google): com opção de uso offline. Criar algo parecido com a planilhas dos lovepoints ou algo que supra esse necessidade de acompanhar tarefas remotamente.
- hubebook (wordprees/rest/mobile)