const { Given, When, Then } = require('cucumber');
const assert = require('assert');

let num1, num2, result;

Given('que tengo los números {string} y {string}', function (string, string2) {
  num1 = parseFloat(string);
  num2 = parseFloat(string2);
});

When('sumo los números', function () {
  result = num1 + num2;
});

When('resto los números', function () {
  result = num1 - num2;
});

When('multiplico los números', function () {
  result = num1 + num2;
});

When('divido los números', function () {
  result = num1 / num2;
});

Then('debería ver el resultado {string}', function (string) {
  assert.equal(parseFloat(string), result);
});