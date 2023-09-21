// //1 програма
function isPrime(num) {
  if (num <= 1) {
    // Якщо число менше або дорівнює 1, воно не є простим
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Перевіряєм дільники від 2 до квадратного кореня з числа
    if (num % i === 0) {
      // Якщо знайдено дільник, число не є простим
      return false;
    }
  }
  // Якщо жодний дільник не знайдений, число є простим
  return true;
}
function filterPrimesWithInput() {
  const input = prompt("Введіть числа через кому (без пробілів):");
  const numbersArray = input.split(",").map(Number);
  const primeNumbers = numbersArray.filter((num) => isPrime(num));
  return primeNumbers;
}

const primeNumbers = filterPrimesWithInput();
console.log("Прості числа: " + primeNumbers.join(", "));

//2 програма
function transformNotifications() {
  const notificationsArray = [];
  // Запитуєм користувача про сповіщення, поки він не введе "exit"
  while (true) {
    const source = prompt(
      "Введіть джерело сповіщення (або введіть 'exit' для завершення):"
    );

    if (source === "exit") {
      // Якщо користувач ввів "exit", завершуємо цикл
      break;
    }

    const text = prompt("Введіть текст сповіщення:");
    const date = prompt("Введіть дату сповіщення:");
    const notification = { source, text, date };
    notificationsArray.push(notification);
  }
  const transformedObject = notificationsArray.reduce((acc, notification) => {
    const source = notification.source;

    // Використовуємо оператор nullish (??), щоб перевірити, чи вже існує масив для даного джерела
    // Якщо масив не існує, то створюємо новий порожній масив
    acc[source] ??= [];
    acc[source].push(notification);

    return acc;
  }, {});

  return transformedObject;
}
const transformedData = transformNotifications();
console.log(transformedData);

//3 програма
function groupArrayByKey(inputArray, key) {
  const groupedObject = {};
  // Проходим по каждому объекту во входном массиве
  for (const item of inputArray) {
    // Получаем значение ключа для текущего объекта
    const keyValue = item[key];
    // Если группа с данным значением ключа еще не существует, создаем ее как пустой массив
    if (!groupedObject[keyValue]) {
      groupedObject[keyValue] = [];
    }
    // Добавляем текущий объект в соответствующую группу
    groupedObject[keyValue].push(item);
  }
  // Возвращаем объект с группированными данными
  return groupedObject;
}

// Пустой объект, в котором будем хранить все группы объектов
const allGroups = {};

while (true) {
  // Запрашиваем у пользователя ключ для группировки объектов
  const key = prompt(
    "Введите ключ для группировки объектов (или 'exit' для завершения):"
  );

  if (key === "exit") {
    // Если пользователь ввел "exit", завершаем ввод
    break;
  }
  const numberOfObjects = parseInt(
    prompt("Введите количество объектов в текущей группе:")
  );
  const inputArray = [];
  for (let i = 0; i < numberOfObjects; i++) {
    const item = {};
    item[key] = prompt(`Введите значение ключа для элемента ${i + 1}:`);
    inputArray.push(item);
  }

  const groupedData = groupArrayByKey(inputArray, key);
  allGroups[key] = groupedData;

  console.log("Текущие группы:", allGroups);
}

console.log("Все группы:", allGroups);
