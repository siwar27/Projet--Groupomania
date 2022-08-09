const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser  = require('body-parser');
const path = require('path');
const apiRouter = require('./server/route/apiRouter').router;
const cors = require('cors');
const userfetch = require('./userfetch');

const corsOptions = {
    'Access-Control-Allow-Origin': '*'
}

// Instantiate server
var server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(cors(corsOptions))


// config view engine
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));
server.set('/img', path.join(__dirname + 'public/img'));


server.use(express.static(path.join(__dirname + '/public')));

// Declare view routes
server.get('/register', (req, res) => {
    res.render('register')
});
server.get('/connexion', (req, res) => {
    res.render('connexion')
});
server.get('/', (req, res) => {
    res.render('home')
});

// Declare API routes
server.use('/', apiRouter);

server.listen(3500, function() {
    console.log('Server en écoute :)');
})