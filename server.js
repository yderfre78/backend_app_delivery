const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const multer = require('multer');


/*
IMPORTAR RUTAS
*/
const usersRoutes = require('./routes/userRoutes');
const categoriesRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.disable('x-powered-by');

app.set('port', port);

const upload = multer({
    storage: multer.memoryStorage()
});

/*
LLAMADO DE LAS RUTAS
*/
usersRoutes(app, upload);
categoriesRoutes(app, );
productRoutes(app, upload );



server.listen(3000, '192.168.0.14' || 'localhost', function() {
    console.log('Aplicacion de NodeJS ' + port + ' Iniciada...')
});



app.get('/', (req, res) => {
    res.send('Ruta Raiz del Backend');
});
app.get('/test', (req, res) => {
    res.send('Ruta test');
});


// ERROR HANDLER

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack)
});


// 200 - RESPONSE OK
// 404 - URL NOT FOUND
// 500 - INTERNAL SERVER ERROR