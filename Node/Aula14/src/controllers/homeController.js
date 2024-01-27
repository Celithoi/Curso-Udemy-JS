exports.paginaInicial = (req,res) =>{
    //req.session.usuario = {nome: 'marcelo', logado: true};
    // vai ficar logado por 7 dias segundo criado no server.js
    res.render('index');
    return;
}
exports.trataPost = (req,res)=>{
    res.send('Ei, sou sua nova rota de Post')
    return;
}