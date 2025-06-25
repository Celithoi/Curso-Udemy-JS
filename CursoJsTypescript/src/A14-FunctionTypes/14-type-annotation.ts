// tipo de funções ou function types anotation

type mapStringCallback = (item: string) => string;

function mapString(array: string[], callbackfn: mapStringCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const abcMap = mapString(abc, item => item.toUpperCase());

console.log(abcMap); // ['A', 'B', 'C']
