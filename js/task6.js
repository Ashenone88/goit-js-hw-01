"use strict";

let input;
let total = 0;
do {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Введите, пожалуйста число");
    continue;
  }
  total += Number(input);
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
