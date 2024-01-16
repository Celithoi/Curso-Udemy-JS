function zeros (n) {
    let divisor = 1
    let somador = 0 
    
    while (divisor <= n){
        somador = Math.floor(somador + n/(divisor *= 5))
    }
    return somador
}
console.log(zeros(6));  
console.log(zeros(101));