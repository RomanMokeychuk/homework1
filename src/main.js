//1 програма
function randomDelayPrint(message) {
    let index = 0;
    function printNextLetter() {
        if (index < message.length) {
            const letter = message[index];
            console.log(letter);
            index++;

            setTimeout(printNextLetter, Math.random() * 1000);
        }
    }
    printNextLetter();
}
randomDelayPrint("Mokeychuk");

//2 програма
function debounce(func, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}
const expensiveOperation = () => console.log("Виконую складну операцію...");
const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);
debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();

//3 програма
function intervalRace(functions, t) {
    const results = [];
    let index = 0;

    const runNextFunction = () => {
        if (index < functions.length) {
            functions[index]().then((result) => {
                results.push(result);
                console.log(result);
                index++;
                if (index < functions.length) {
                    setTimeout(runNextFunction, t);
                }
            });
        }
    };

    runNextFunction();
}

// Приклад використання
const task1 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Завдання 1 виконано");
        }, 1000);
    });

const task2 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Завдання 2 виконано");
        }, 500);
    });

const task3 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Завдання 3 виконано");
        }, 1500);
    });

const task4 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Завдання 4 виконано");
        }, 500);
    });
intervalRace([task1, task2, task3, task4], 1000);
