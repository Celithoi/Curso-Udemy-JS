const Contato = require('../models/ContatoModel')

exports.index = (req,res) =>{
    res.render('contato', {
        contato: {}
    });
};

exports.register = async (req,res) =>{
    
    try{

        const contato = new Contato(req.body)
        await contato.register();
    
        if(contato.errors.length > 0){
            req.flash('errors',contato.errors);
            req.session.save(()=>{res.redirect('/contato/index')})
            return;
        }
    
        req.flash('success','Contato Registrado com Sucesso');
        //req.session.save(()=>{res.redirect(`/contato/index/${contato.contato._id}`)})
        //MUDANÇA para testar
        //
        req.session.save(()=>{res.redirect(`/`)})
        return;

    }catch(e){
        console.log(e)
        res.render('404');
    }
   
};

exports.editIndex = async function(req,res) {
    if(!req.params.id) return res.render('404');
    const contato = await Contato.buscarPorId(req.params.id);
    if(!contato) return res.render('404');
    res.render('edit' , { contato });
};

exports.edit = async function(req,res) {
    try{

        if(!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);

        if(contato.errors.length > 0){
        req.flash('errors',contato.errors);
        
        req.session.save(() => res.redirect('/'))
        return;
        }

        req.flash('success','Contato editado com Sucesso');
        req.session.save(()=>{res.redirect(`/`)})
        //req.session.save(()=>{res.redirect(`/contato/index/${contato.contato._id}`)})
        //MUDANÇA para testar
        //
        return;

    }catch(e){
        console.log(e)
        res.render('404');
    }
    
    
};

exports.delete = async function(req,res){
    if(!req.params.id) return res.render('404');

    const contato = await Contato.delete(req.params.id);
    if(!contato) return res.render('404');

    req.flash('success','Contato apagado com Sucesso');
    req.session.save(()=>{res.redirect(`/`)})
    return;
};