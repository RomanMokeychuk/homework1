//1 програма
function logArguments(fn) {
    // Повертаєм нову функцію яка приймає будь-яку кількість аргументів за допомогою оператора rest (...)
    return function (...args) {
        console.log("Arguments:", args);
        // Викликаєм оригінальну функцію fn, використовуючи метод apply передаючи їй аргументи
        return fn.apply(this, args);
    };
}
// Оголошуєм оригінальну функцію exampleFunction яка обчислює суму трьох чисел
function exampleFunction(a, b, c) {
    return a + b + c;
}
// Використовуєм функцію-декоратор logArguments для створення нової функції decoratedExampleFunction
const decoratedExampleFunction = logArguments(exampleFunction);
// Викликаєм decoratedExampleFunction з аргументами
const result = decoratedExampleFunction(6, 8, 2);
console.log("Result:", result);

//2 програма
function validate(fn, validator) {
    return function (...args) {
        // Перевірка аргументів за допомогою валідатора
        if (!validator(...args)) {
            throw new Error("Invalid arguments");
        }
        return fn(...args);
    };
}
// Валідатор який перевіряє чи всі аргументи є числами
function numberValidator(...args) {
    return args.every((arg) => typeof arg === "number");
}
function sumNumbers(a, b) {
    return a + b;
}
// Створення верифікованої функції sumNumbers з використанням валідатора
const validatedSumNumbers = validate(sumNumbers, numberValidator);
// Виклик функції з логікою перевірки аргументів
const outcome = validatedSumNumbers(6, 4);
console.log("Result:", outcome);
try {
    // Спроба викликати функцію з неправильними аргументами
    validatedSumNumbers(10, "invalid");
} catch (error) {
    console.error("Error:", error.message);
}
