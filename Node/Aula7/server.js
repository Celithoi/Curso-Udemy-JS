const express = require('express');
const app = express();

// /profile/12345?campanha=googleads&nome_campanha=seila
// profile do usuario / numero do usuario 
// / campanha = google ADS  E nome_campanha = seila 

app.get('/', (req,res) =>{
    res.send(`
    <form action ="/" method="POST">
    nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>    
    `);
});
//
app.use(
    express.urlencoded({extended:true})
)

app.get('/testes/:idUsuarios?/:parametros?',(req,res)=>{
    console.log(req.params); // http://www.site.com.br/profile/3 ou 4 ou 5 
    console.log(req.query) // http://www.site.com.br/profiles/?chave1=valor&chave2=valor
    //res.send(req.params.idUsuarios);
    res.send(req.params);
}); 
app.post('/',(req,res) => {
    console.log(req.body);
    res.send(`o que você me enviou foi? ${req.body.nome}`)
});

app.get('/contato',(reg,res) => 
{
    res.send('obrigado por entrar em contato com a gente');
});



app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});
