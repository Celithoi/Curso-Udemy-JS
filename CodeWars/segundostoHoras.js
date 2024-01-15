function converter(seconds) {
    // pegar os numeros
    const hour = parseInt(seconds / 3600);
    const minute = parseInt(seconds % 3600 / 60);
    const second = parseInt(seconds % 3600 % 60);
    
    // modificar os numeros para forma pedida
    function modify(number) {
      let stringNumber = String(number);
      if(stringNumber.length == 1) {
        stringNumber = '0'+stringNumber;
      }
      return stringNumber;
    }
    
    return modify(hour)+':'+modify(minute)+':'+modify(second);
  }

console.log(converter(60));
console.log(converter(3599));
console.log(converter(3600));
console.log(converter(45296));
console.log(converter(86399));
console.log(converter(359999));