- O que são esses métodos 1:.currentTime, 1.1.:.play.
1: (recomendasse o formato .mp4)

1: currentTime: When setting this property, the playback will jump to the specified position (seconds).

1.1.: play: The play() method starts playing the current audio or video. / Use the pause() method to pause the current audio/video. / Use the load() method to stop the current audio/video. The volume property sets or returns the current volume of the audio/video (value = 0|1). / he muted attribute is a boolean attribute. http://bleedinghtml5.appspot.com
Tag de video (source dentro da tag video) com os seguintes atributos controls, autoplay, muted, poster (miniatura do vídeo)

TODOS ESSES DADOS PODEM SER SALVOS NUM BANCO DE DADOS E ISSO DEVE GERAR ESTATÍTICAS
.onplay: coleta o evento de play no vídeo
.onpause: coleta o evento de pause no vídeo
.onabort: coleta o evento de stop (abort) do vídeo
.onvolumechange: coleta o evento de alteração do volume
.oncanplay: coleta o momento em que o vídeo é carregado
.playbackRate: aumenta ou diminui a velocidade do vídeo

```
document.querySelector('video').playbackRate = 1.8;
```

localStorage.setItem(id) and localStorage.getItem(id)
JSON.stringify: transforma o objeto numa string, e prepara os dados para serem salvos.
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
JSON.parse: transforma string em objeto (o inverso do stringify)

Com audio é bem similar (inclusive é possível rodar um .mp4) e até mesmo deixar o audio oculto sem os controls, de resto é muito parecido com o vídeo.

YOUTUBE
Playlist personalizada: 
https://www.youtube.com/embed/UQL3_SoExsY?listType=playlist&playlist=K-MuDP5Ttz0,qr1TcBXTTdI

Busca personalizada:
https://www.youtube.com/embed?listType=search&list=string