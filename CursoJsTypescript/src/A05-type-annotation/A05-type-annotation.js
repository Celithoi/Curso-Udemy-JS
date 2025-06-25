"use strict";
// Declaração de Array
// Array<T> - T[]
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicaArgs = multiplicaArgs;
exports.concatenaString = concatenaString;
exports.toUpperCase = toUpperCase;
function multiplicaArgs(...args) {
    return args.reduce((acc, valor) => acc * valor, 1);
}
function concatenaString(...args) {
    return args.reduce((acc, valor) => acc + valor);
}
function toUpperCase(...args) {
    return args.map(valor => valor.toUpperCase());
}
const result = multiplicaArgs(1, 2, 3);
const concat = concatenaString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');
console.log(result);
console.log(concat);
console.log(upper);
