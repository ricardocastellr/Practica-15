var express = require('express'); 
var app = express();
var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.use(express.urlencoded({extended: false})) // Para indicar que vamos a parsear con elementos del body

app.use('/', function(req,res,next){
    console.log('Request Url:' + req.url);
    next();
});

app.get('/',function (req,res){
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
    <body><h1>Hello world!<h1></body></html>`);
});

app.get('/student', (req, res)=>{
    res.render('student');  // Renderizamos el formulatio de student
});

/*app.post('/addStudent', (req, res)=>{
    res.send(` Nombre: ${req.body.nombre}
                Edad: ${req.body.edad}
                NSS: ${req.body.nss}
                tipoSangre: ${req.body.tipoSangre}`);
}); Usando el metodo post y metodo send enviamos la informacion*/

app.post('/addStudent', (req, res)=>{
    res.render('displayData', { Nombre: req.body.nombre,
                                Edad: req.body.edad,
                                NSS: req.body.nss,
                                tipoSangre: req.body.tipoSangre});
}); // Para poder renderizar la información en displayData cambiamos el metodo send al render y lo convertimos a 4 keys


app.listen(port);