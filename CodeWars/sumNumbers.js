function getSum(a, b)
{
    let num1 = a
    let num2 = b
    let total = 0;

    if (num1 > num2){
        for(let contador = num2; num1 >= contador; contador++){
            total = total + contador;
            if(contador > 100 ){
                return console.log('erro')
            }
        }
        return total;
    }if( num1 < num2){
        for(let contador = num1; contador <= num2; contador++){
            total = total + contador
        }
        return total
    }if(num1 === num2)
        return num1

    return ;
}

console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));