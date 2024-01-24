const express = require('express');
const app = express();
const routes = require('./routes') 

// /profile/12345?campanha=googleads&nome_campanha=seila
// profile do usuario / numero do usuario 
// / campanha = google ADS  E nome_campanha = seila 


//
app.use(express.urlencoded({extended:true}));
app.use(routes);

app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});
