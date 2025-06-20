/*eslint-disable*/

function showMessage(msg: any) {
  // fuja do Any
  return msg;
}

console.log(showMessage('ola'));
console.log(showMessage(123));

// declaração de tipo para funções
