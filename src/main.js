//1 програма
// Функція для отримання сповіщень від користувача
function getNotifications() {
  const notifications = [];
  while (true) {
    const source = prompt(
      "Введіть джерело повідомлення (або натисніть 'Скасувати' для завершення):"
    );
    if (source === null || source.trim() === "") {
      // Вихід з циклу, якщо користувач натиснув "Відміна" або залишив поле порожнім
      break;
    }
    const text = prompt("Введіть текст повідомлення:");
    const date = prompt("Введіть дату повідомлення:");
    const notification = { source, text, date };
    notifications.push(notification);
  }
  // Створюємо ітератор для повідомлення
  const iterator = {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < notifications.length) {
            return { value: notifications[index++], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
  return iterator;
}
const notifications = getNotifications();
// Ітеруємося по повідомлення і виводимо їх на консоль
for (const notification of notifications) {
  console.log(`Джерело: ${notification.source}`);
  console.log(`Текст: ${notification.text}`);
  console.log(`Дата: ${notification.date}`);
  console.log("=========================================");
}

// 2 програма
function memoize(fn) {
  //Создаем объект cache для хранения кеша результатов вычислений
  const cache = new Map();
  //Возвращаем новую функцию которая будет выполнять кеширование
  return function (...args) {
    //Создаем ключ для кеширования на основе аргументов
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}
function expensiveCalculation(x, y) {
  console.log(`Вычисление для аргументов ${x} и ${y}`);
  return x + y;
}
const memoizedCalculation = memoize(expensiveCalculation);
//Первый вызов - результат вычисления будет сохранен в кеше
console.log(memoizedCalculation(5, 9));
//Второй вызов с теми же аргументами - результат будет взят из кеша
console.log(memoizedCalculation(5, 9));
