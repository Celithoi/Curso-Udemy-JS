require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Conectando com a base de dados

mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    app.emit('pronto');
} ).catch(e => console.log(e)); 

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')

const routes = require('./routes');
const path = require('path');

//const { default: mongoose, default: mongoose } = require('mongoose');

// /profile/12345?campanha=googleads&nome_campanha=seila
// profile do usuario / numero do usuario 
// / campanha = google ADS  E nome_campanha = seila 


//
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname,'public')))
const sessionOptions = session({
    secret: 'texto que ninguem sabe' ,
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('pronto',() =>{
    app.listen(3000, () => {
        console.log('acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000');
    });
});
