// 1 програма
const number = parseInt(prompt("Введіть число:")); //Поле для ввода числа

// Перевіряємо чи число ділиться на 3 та 5
if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizzBuzz");
  // Якщо число ділиться на 3
} else if (number % 3 === 0) {
  console.log("Fizz");
  // Якщо число ділиться на 5
} else if (number % 5 === 0) {
  console.log("Buzz");
} else {
  // Якщо число не ділиться на 3 і 5
  console.log(number); // Виводиця те саме число
}

// 2 програма
const y = parseInt(prompt("Введіть рік:"));
if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
  console.log("YES"); // Високосний рік
} else {
  console.log("NO"); // Не високосний рік
}

// Програма 3
// Отримуємо кількість років від користувача
const year = parseInt(prompt("Введіть кількість років:"));
function getYearLabel(number) {
  if (number % 10 === 1 && number % 100 !== 11) {
    return "рік"; // Якщо число закінчується на 1 (окрім 11), то використовуємо форму "рік"
  } else if (
    number % 10 >= 2 &&
    number % 10 <= 4 &&
    (number % 100 < 10 || number % 100 >= 20)
  ) {
    return "роки"; // Якщо закінчується на 2-4 (крім 12-14)
  } else {
    return "років"; // У всіх інших випадках "років"
  }
}
// Викликаємо функцію для визначення правильної форми слова "рік"
const label = getYearLabel(year);

console.log(`${year} ${label}`);
//${year}: Це змінна year, яку ви виводим (кількість років)
//${label}: Це змінна label, яку отримуєм в результаті виклику функції getYearLabel().
