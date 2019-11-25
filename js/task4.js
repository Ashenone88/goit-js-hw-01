"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let droidTotalAmount = prompt("Какое количесво дроидов приобрести?");
let totalPrice = droidTotalAmount * pricePerDroid;
if (droidTotalAmount === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${droidTotalAmount} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`
  );
}
