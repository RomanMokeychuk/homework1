//1 програма
function summarize(num) {
    if (typeof num !== "number") {
        num = 1;
    }
    // Функція яка додає число до аргументу
    return function (arg) {
        // Перевіряєм чи передано аргумент
        if (typeof arg === "number") {
            return num + arg;
        } else {
            // Додаємо одиницю якщо аргумент не передано
            return num + 1;
        }
    };
}
const addFive = summarize(10);
console.log(addFive(2));
console.log(addFive());

//2 програма
function counter(startValue, step) {
    let current = startValue;
    // Метод для збільшення значення на крок
    function increment() {
        current += step;
    }
    // Метод для зменшення значення на крок
    function decrement() {
        current -= step;
    }
    // Метод для скидання значення до початкового
    function reset() {
        current = startValue;
    }
    // Метод для отримання поточного значення
    function getCurrentValue() {
        return current;
    }
    // Повертаєм об'єкт з методами
    return {
        increment,
        decrement,
        reset,
        getCurrentValue,
    };
}
const myCounter = counter(10, 11);
myCounter.increment();
console.log(myCounter.getCurrentValue());
myCounter.decrement();
console.log(myCounter.getCurrentValue());
myCounter.reset();
console.log(myCounter.getCurrentValue());
