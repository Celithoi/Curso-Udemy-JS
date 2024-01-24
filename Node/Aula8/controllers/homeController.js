exports.paginaInicial = (req,res) =>{
    res.send(`
    <form action ="/" method="POST">
    nome do cliente: <input type="text" name="qualquercoisa"><br>
    outro campo: <input type="text" name"aquioutrocampo">
    <button>Enviar</button>
    </form>    
    `);
}
exports.trataPost = (req,res)=>{
    res.send('Ei, sou sua nova rota de Post')
}