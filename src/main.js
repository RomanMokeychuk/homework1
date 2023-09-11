//1 програма
function doubleLetter(str) {
  /* Розділяєм рядок на масив окремих символів,
   потім застосовуємо функцію map, щоб кожний символ подвоїти.*/
  const doubledChars = str.split("").map((char) => char + char);
  //str.split(""): split("") розбиває рядок str на окремі символи і повертає їх у масиві
  //(char) => char + char бере кожен символ char і об'єднує його сам з собою подвоюючи його

  return doubledChars.join("");
  // Об'єднуєм масив знову у рядок
}

const inputWord = prompt("Введіть слово:");

if (inputWord !== null) {
  const result = doubleLetter(inputWord);
  console.log(result);
}
//2 програма
function padString(str, length, symbol, toLeft = true) {
  /*str: початковий рядок, до якого потрібно додати символи
    length: цільова довжина рядка після додавання символів
    symbol: символ, яким доповнюється рядок
    toLeft (за замовчуванням false): флаг, який вказує, з якого боку додавати символи (true - зліва, false - справа)*/
  if (str.length >= length) {
    return str;
    // Повертаєм вихідний рядок без змін, якщо він вже довший або рівний вказаній довжині
  }

  const padding = symbol.repeat(length - str.length);
  // Генеруєм рядок з необхідною кількістю символів

  if (toLeft) {
    return padding + str;
    // Додаєм символи зліва
  } else {
    return str + padding;
    // Додаєм символи справа
  }
}

const inputString = prompt("Введіть рядок:");
const inputLength = parseInt(prompt("Введіть довжину:"));
const inputSymbol = prompt("Введіть символ:");

//(true для зліва, false для справа)
const inputToLeft = confirm("Додавати символи зліва?");

const result = padString(inputString, inputLength, inputSymbol, inputToLeft);

console.log(result);

//3 програма
// Функція camelCase приймає рядок str та масив роздільників separators
function camelCase(str, separators) {
  // Розділити рядок на слова за допомогою вказаних роздільників
  const words = str.split(new RegExp(`[${separators}]`));

  // Перетворити перший символ кожного слова на верхній регістр
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}
const inputText = prompt("Введіть текст для перетворення на camelCase:");

if (inputText !== null) {
  const separator = prompt("Введіть роздільники (наприклад, -, _, ., тощо):");

  const camelCased = camelCase(inputText, separator);
  console.log(camelCased);
}
