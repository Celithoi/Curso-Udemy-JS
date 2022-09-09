const pessoas = [
    { id:3, nome:'Luiz'},
    { id:2, nome:'Maria'},
    { id:1, nome:'Helena'},
];

// const novasPessoas = {};
// for (const {id,nome} of pessoas){
//    novasPessoas[id] = {id,nome}
// }                                 
//         OU
// const novasPessoas = {};
//    for(const pessoa of pessoas){
//    const {id} = pessoa;  
//    novaPessoas[id] = { ...pessoa};
//}

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, { ...pessoa});
}

// posso usar novasPessoas.value ou novasPessoas.keys

for (const pessoa of novasPessoas){
    console.log(pessoa);
}

for(const [identifier, {id,nome}] of novasPessoas){
    console.log(identifier,id,nome);
}

//console.log(novasPessoas);