const path = require('path')
const express = require('express')
const videoStream = require('video-stream')

var find = require('find');

var directorio = "/home/motoraton/Documentos/proyectos/streamingvideo/";


const app = express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'node_modules')));



app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});




app.get(['/video/:filename','/video/*/:filename','/video/*/*/:filename'],  function (req, res, next) {
  var text = decodeURI(req.originalUrl);


  text = text.replace(req.params.filename,'');

  text = text.replace("/video",'');
  text = decodeURI(text);
  req.params.filename = path.resolve(text + req.params.filename);
  console.log(req.params.filename);


  next();

}, videoStream({ dir: path.resolve(directorio) }));




// Your normal routes
app.get('/', (req, res) => {
  res.render('index');
})


app.get('/files', (req, res) => {
  find.file(/\.(avi|mkv|mp4)$/,directorio, function(files) {
    //console.log(files);
    var i = 0;
    var files_correct = [];
    while (files[i]) {
       var file_correct = files[i].replace(directorio,'');
       files_correct.push(file_correct);
      i++;
    }
    //console.log(files_correct);
    res.json(files_correct);
  });
});

app.listen(3001, () => {
  console.log(`Listening on port 3001`)
})
