function rgb(r, g, b) { // recebe 3 valores em hexa de 255 - 0 converter para hexa
    
    let red = verificaValor(r);
    let green = verificaValor(g);
    let blue =  verificaValor(b);;
    return console.log(red+green+blue);
}

function verificaValor(valor){
    if(valor < 0) {valor = 0;} 
    if(valor > 255) {valor = 255;}
    valor =  valor.toString(16).toUpperCase();
    if(valor.length < 2) valor = '0'+valor; 
    return valor;
};


rgb(255, 255, 255);
rgb(255, 255, 300);
rgb(0, 0, 0 );
rgb(148, 0, 211);