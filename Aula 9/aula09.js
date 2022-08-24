// aula aprendendo usar try catch, throw e finally
// exemplo interessante, por isso vou guardar
function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new typeofError("Esperando instância de Date");
    }
    if(!data){
        data = new Date();
    }
    // super interessante essa função
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11); // se passar em branco ou hora vai dar certo
    console.log(hora);            // caso contrario vai dar erro
}catch(e){
    //tratar erro
    //console.log(e);
}finally{
    console.log('tenha um bom dia');
}