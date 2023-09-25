//1 програма
const notifications = [];
while (true) {
  const source = prompt(
    "Введите источник уведомления (или нажмите 'Отмена' для завершения):"
  );
  //Проверяем, была ли нажата кнопка "Отмена" или поле оставлено пустым
  if (source === null || source.trim() === "") {
    //Если да, завершаем ввод уведомлений
    break;
  }
  const text = prompt("Введите текст уведомления:");
  const date = prompt("Введите дату уведомления:");
  // Создаем объект уведомления и добавляем его в массив
  const notification = { source, text, date };
  notifications.push(notification);
}
console.log(notifications);

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
