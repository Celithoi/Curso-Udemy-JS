require('dotenv').config();

const express = require('express');
const app = express();

//Conectando com a base de dados

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    app.emit('pronto');
} ).catch(e => console.log(e)); 

//identificar um navegador do computador cliente

const session = require('express-session');
// salvar as sessions no banco de dados
const MongoStore = require('connect-mongo');
// mensagem lidas e depois apagadas
const flash = require('connect-flash');
// rotas de conexoes entre paginas 
const routes = require('./routes');
// caminho
const path = require('path');
// recomendação do express do cabeçalho
const helmet = require('helmet');
// tokens para formularios gerando segurança. 
const csrf = require('csurf');
// middlewares conexao entre rotas
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');
//
app.use(helmet());
// postar formularios pára dentro da aplicaçã
app.use(express.urlencoded({extended:true}));
// exportar parse do json para dentro da aplicação;
app.use(express.json());
// arquivos estaticos para acessar qualquer coisa dentro de public diretamente
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
// arquivos htmls para poderem ser renderizados pela aplicação ... 
// qual caminho da pasta
app.set('views', path.resolve(__dirname,'src','views'));
// qual engine
app.set('view engine', 'ejs');
// configurando crsf
app.use(csrf());
// Mossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);
// chamando aplicação
app.on('pronto',() =>{
    app.listen(3000, () => {
        console.log('acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000');
    });
});
