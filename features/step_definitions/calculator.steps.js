const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const assert = require('assert');
const { sumar, dividir, restar } = require('../../calculator');

let num1, num2, result, error;

Given('que tengo los números {string} y {string}', function (string, string2) {
  num1 = parseFloat(string);
  num2 = parseFloat(string2);
});

When('sumo los números', function () {
  result = sumar(num1, num2);
});

When('resto los números', function () {
  result = restar(num1, num2);
});

When('multiplico los números', function () {
  result = sumar(num1, num2);
});

When('divido los números', function () {
  result = dividir(num1, num2);
});

When('intento dividir el primer número por el segundo número', function () {
  try {
    result = dividir(num1, num2);
  } catch (error) {
    error = error;
  }
});

Then('obtengo un mensaje de error que dice {string}', function (string) {
  assert.equal(string, error);
});

Then('debería ver el resultado {string}', function (string) {
  assert.equal(parseFloat(string), result);
});
