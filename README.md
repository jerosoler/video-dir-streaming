

## Instalación 
Descargamos:
`git clone https://github.com/jerosoler/video-dir-streaming.git`

Entramos al directorio
`cd video-dir-streaming/`

Instalamos
`npm install`


Hay que cambiar el directorio del cual se quiere hacer streaming.

Cambiar directorio de index.js linea número: 7
```javascript 
var directorio = 'TU DIRECTORIO';
```

## Ejecutar
`nodejs index.js`

## Play
`http://localhost:3001` 
o
`http://your_private_ip:3001`


## Funcionamiento:
Funciona con videos mp4. Busca en el directorio archivos "mkv,mp4,avi". Puede existir problemas con el audio en los videos, por falta codecs no soportados por html5.
