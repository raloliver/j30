4 especificações para webcomponents: https://developer.mozilla.org/en-US/docs/Web/Web_Components
1: custom elements
2: templates
3: shadow dom
4: html imports

https://www.youtube.com/watch?v=hnkSbA4ZDGQw (https://goo.gl/gTvJvr)

PAGE VISIBILITY
Provides ab API to ask whether the current page is visible or not.
- new property visibilityState
- new attribute link rel="prefetch" https://en.wikipedia.org/wiki/Link_prefetching
- Exemplo de uso: quando o user sai da aba e vai pra outra tela, automaticamente o vídeo é pausado.

ONLINE STATE
Exposes a network connection availability information to the web.
- console.log (navigator.online ? 'online' : 'offline');
- é possível saber se o user está numa conexão 3g ou wifi, e a depender disso, limitar algumas ações de banda por Exemplo

VIBRATION
- Provides access to a form to tactile feedback.
navigator.vibrate([400, 300, 300, 200, 500]);
- Legal usar em validação de formulário (com moderação claro)

DEVICE ORIENTATION
- Provides access to device's physical orientation.
- É possível usar as propriedade (.beta, .gama e .alpha) e aplicar um transform usando CSS coletando esses valores e fazer uma imagem rotacionar (CSS: rotate and rotate3d)

CLIPBOARD
- Standard APIs for interacting with the clipboard (copy/cut/paste).
- .setSelectionRange / .execCommand (use the clipboard.js)
- Use with addEventListener: copy, paste, cut.

AMBIENT LIGHT
- Exponses sensor data thar captures the ligth intensity.
- Use with addEventListener: deviceLight
- Legal usar pra mudar o tema quando o user está num ambiente escuro

BATTERY STATUS
- Allows a web page to access batery information from desktop and mobile devices.
- navigator.getBattery() and addEventListener('levelchange')

PROGRESSIVE WEB APPS
- service workers
- background sync
- push notifications
- app manifest
- offline support
- web bluetooth
- web nfc

THIS IS BELOW IS FOR THE FUTURE

WEB ASSEMBLY
- WASM is a low-level programming language for the client-side.

WEB VR
- Experimental API that provides access to Virtual Reallity devices, such as the Oculus Rift or Google Cardboard.

GAMEPAD
- Gives access to a game controller via USB
- navigator.getGamepads()
- addEventListener('gamepadconnected')
- requestAnimationFrame

