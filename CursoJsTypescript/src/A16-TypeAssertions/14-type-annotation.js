"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type
// conditional type annotation
const body = document.querySelector('body');
if (body) {
    body.style.background = 'red';
}
//component non null assertion
const body2 = document.querySelector('body');
body2.style.background = 'red';
//component type assertion
const body3 = document.querySelector('body');
body3.style.background = 'red';
//HTMLInputElement type assertion
const input = document.querySelector('.input');
input.value = 'Testando...';
input.focus();
