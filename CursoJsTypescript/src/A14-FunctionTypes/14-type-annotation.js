"use strict";
// tipo de funções ou function types anotation
Object.defineProperty(exports, "__esModule", { value: true });
function mapString(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackfn(array[i]));
    }
    return newArray;
}
const abc = ['a', 'b', 'c'];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const abcMap = mapString(abc, item => item.toUpperCase());
console.log(abcMap); // ['A', 'B', 'C']
