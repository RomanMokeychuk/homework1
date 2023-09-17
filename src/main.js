//1 програма
function capitalizeStrings(stringsArray) {
  const capitalizedArray = [];
  // Створюєм порожній масив для зберігання перетворених рядків
  for (const str of stringsArray) {
    // Перетворюєм поточний рядок, роблячи першу літеру великою (toUpperCase())
    // і решту літер в нижньому регістрі (toLowerCase())
    const capitalizedStr =
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    // Додаєм перетворений рядок до масиву capitalizedArray
    capitalizedArray.push(capitalizedStr);
  }
  // Повертаєм новий масив із перетвореними рядками
  return capitalizedArray;
}
const inputString = prompt("Введите строки через запятую (без пробелов):");
const words = inputString.split(",");
console.log(capitalizeStrings(words));

//2 програма
function findCommonElements(array1, array2) {
  /*Використовуєм метод filter для створення нового масиву, в якому лишаються тільки елементи,
    які є в обох вхідних масивах (array1 і array2)*/
  const commonElements = array1.filter((element) => array2.includes(element));
  return commonElements;
}
const input1 = prompt(
  "Введіть числа через кому для першого масиву (без пробілів):"
);
const input2 = prompt(
  "Введіть числа через кому для другого масиву (без пробілів):"
);

const array1 = input1.split(",").map(Number);
const array2 = input2.split(",").map(Number);

console.log(findCommonElements(array1, array2));

//3 програма
function analyzeArray(numbersArray) {
  // Використовуєм деструктуризацію для одразу отримати мінімальне та максимальне значення
  const { min, max } = numbersArray.reduce(
    (acc, num) => ({
      min: Math.min(acc.min, num),
      max: Math.max(acc.max, num),
    }),
    { min: Infinity, max: -Infinity }
  );
  // Обчислюєм суму елементів масиву за допомогою метода reduce
  const sum = numbersArray.reduce((acc, num) => acc + num, 0);
  // Обчислюєм середнє значення елементів, поділяючи суму на кількість елементів
  const average = sum / numbersArray.length;
  // Об'єкт з обчисленими значеннями
  return {
    sum,
    average,
    min,
    max,
  };
}
const input = prompt("Введіть числа через кому (без пробілів):");
const numbers = input.split(",").map(Number);
console.log(analyzeArray(numbers));
