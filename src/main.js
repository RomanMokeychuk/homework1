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
const y = parseInt(prompt("Введіть рік:")); // Полє для ввода року
// Перевіряємо, чи рік є високосним. y = year!
if (y % 4 === 0 && y % 100 !== 0) {
  console.log("YES"); //  "YES", якщо рік ділиться на 4 і на 100
} else if (y % 400 === 0) {
  console.log("YES"); //  "YES", якщо рік ділиться на 400
} else {
  console.log("NO"); // В іншому випадку виводимо "NO"
}

// Програма 3
// Отримуємо кількість років від користувача
const year = parseInt(prompt("Введіть кількість років:"));
//Визначення правильної форми слова "рік" в залежності від числа
function getYearLabel(number) {
  if (number === 1) {
    return "рік"; // Якщо число дорівнює 1, "рік"
  } else if (number >= 2 && number <= 4) {
    return "роки"; // Якщо число від 2 до 4, "роки"
  } else {
    return "років"; // У всіх інших випадках "років"
  }
}
// Викликаємо функцію для визначення правильної форми слова "рік"
const label = getYearLabel(year);
console.log(`${year} ${label}`);
//${year}: Це змінна year, яку ви виводим (кількість років)
//${label}: Це змінна label, яку отримуєм в результаті виклику функції getYearLabel().
