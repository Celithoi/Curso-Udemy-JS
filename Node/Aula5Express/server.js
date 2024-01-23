const express = require('express');
const app = express();

//         CRIAR,   Ler,  Atualizar, apagar  

//CRUD -> CREATE , READ , UPDATE, DELETE;

//         POST,  GET ,   PUT,    DELETE;
 

//http://meusite.com/ <- GET -> entregue a pagina / ou raiz.

// http://meusite.com/sobre <- GET -> entregue a pagina /sobre

// caminho , função(requisição,resposta)
app.get('/', (req,res) =>{
    res.send(`
    <form action ="/" method="POST">
    nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>    
    `);
});

app.post('/',(req,res) => {
    res.send('recebi o formalrio')
});

app.get('/contato',(reg,res) => 
{
    res.send('obrigado por entrar em contato com a gente');
});



app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});
