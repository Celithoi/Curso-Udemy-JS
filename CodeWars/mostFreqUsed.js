function topThreeWords(text) {
    const words = text.split(' ').filter(word => word)
    let occurences = []
    
    words.forEach(word => {
      let found = false
      let authorized = false
      
      word = word.toLowerCase().replace('//', '')
      
      authorizedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      
      word.split('').forEach(letter => (!authorizedChars.includes(letter)) ? authorized = false : authorized = true)
      
      if(authorized) {
        occurences.forEach(occurence => {
          if(occurence[0] === word) {
            found = true
            occurence[1]++
          }
        })
        
        if(!found) {
          occurences.push([word, 1])
        }
      }
    })
    
    occurences = occurences.sort((a, b) => b[1] - a[1]).slice(0, 3).map(occurence => occurence[0])
    
    return occurences
  }

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));