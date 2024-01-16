function add (a, b) {
    var result = ''
    var carry = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || carry) {
    carry += ~~a.pop() + ~~b.pop()
    result = carry % 10 + result
    carry = carry > 9
  }
  return result
}

  console.log(add("123", "321"));
  console.log(add("11", "99"));