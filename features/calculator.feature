Feature: Calculadora
  Como usuario de la calculadora
  Quiero poder realizar operaciones aritméticas
  Para que pueda obtener el resultado de la operación deseada

  Scenario: Sumar dos números
    Given que tengo los números "2" y "3"
    When sumo los números
    Then debería ver el resultado "5"

  Scenario: Restar dos números
    Given que tengo los números "5" y "3"
    When resto los números
    Then debería ver el resultado "2"

  Scenario: Multiplicar dos números
    Given que tengo los números "2" y "3"
    When multiplico los números
    Then debería ver el resultado "6"

  Scenario: Dividir dos números
    Given que tengo los números "6" y "2"
    When divido los números
    Then debería ver el resultado "3"

  Scenario: Dividir dos números, incluyendo la división por cero
    Given que tengo los números "20" y "5"
    When intento dividir el primer número por el segundo número
    Then debería ver el resultado "4"

    Given que tengo los números "10" y "0"
    When intento dividir el primer número por el segundo número
    Then obtengo un mensaje de error que dice "Error: No se puede dividir entre cero"


