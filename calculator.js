function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  if (num2 === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return num1 / num2;
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
};

//Se debe ejecutar npx cucumber-js --format=json:reports/results.json
//luego node cucumber.js
