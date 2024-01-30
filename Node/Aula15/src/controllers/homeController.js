exports.paginaInicial = (req,res) =>{
    //req.session.usuario = {nome: 'marcelo', logado: true};
    // vai ficar logado por 7 dias segundo criado no server.js
    res.render('index',{
        titulo: 'Este será o titulo da pagina',
        numeros: [0,1,2,3,4,5,6,7,8,9],
    });
    return;
}
exports.trataPost = (req,res)=>{
    res.send('Ei, sou sua nova rota de Post')
    return;
}