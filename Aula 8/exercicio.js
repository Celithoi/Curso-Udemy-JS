function teste(numero){

if (typeof numero !== `number`){
    return numero
}

    if(numero % 3 === 0){
        if(numero % 5 === 0){
            return `FizzBuzz`;    
        }
        return `Fizz`;   
    }else if ( numero % 5 === 0){
        return `Buzz`;

    }else return numero   

}


for (let i = 0; i<= 100; i++){
    console.log(i, teste(i))
}
console.log(`a`,teste(`a`))