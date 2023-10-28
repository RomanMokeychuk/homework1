//1 програма
async function sumArrayPromise(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sum = array.reduce((acc, current) => acc + current, 0);
            resolve(sum);
        }, 3000);
    });
}
// Використовуєм async/await для отримання результату з Promise
(async () => {
    const result = await sumArrayPromise([10, 20, 1, 50, 100]);
    console.log(result);
})();

//2 програма
async function concurrentPromises(promises, maxConcurrent) {
    const results = [];
    const executingPromises = [];
    for (let i = 0; i < promises.length; i++) {
        const currentPromise = promises[i];
        const promise = new Promise(async (resolve) => {
            const result = await currentPromise();
            results.push(result);
            resolve();
        });
        executingPromises.push(promise);
        if (
            executingPromises.length >= maxConcurrent ||
            i === promises.length - 1
        ) {
            await Promise.all(executingPromises);
            const batchResults = results.slice(
                results.length - executingPromises.length
            );
            console.log(batchResults);
            executingPromises.length = 0;
        }
    }
}
const promises = [
    () =>
        new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000)),
    () => new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 500)),
    () => new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 800)),
];
concurrentPromises(promises, 2);

//3 програма
async function sequenceAsync(asyncFunctions) {
    let result = null;
    for (const asyncFunc of asyncFunctions) {
        result = await asyncFunc(result);
    }
    return result;
}
const asyncFunc1 = async (prevResult) => {
    // Очікуєм 1 секунду, а потім повертаємо значення 10
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return prevResult ? prevResult + 10 : 10;
};
const asyncFunc2 = async (prevResult) => {
    // Очікуєм 500 мілісекунд, а потім повертаємо значення 20
    await new Promise((resolve) => setTimeout(resolve, 500));
    return prevResult ? prevResult + 20 : 20;
};
const asyncFunc3 = async (prevResult) => {
    // Очікуєм 800 мілісекунд, а потім повертаємо значення 30
    await new Promise((resolve) => setTimeout(resolve, 800));
    return prevResult ? prevResult + 30 : 30;
};
// Масив функцій-промісів, які будуть виконуватися послідовно
const asyncFunctions = [asyncFunc1, asyncFunc2, asyncFunc3];

sequenceAsync(asyncFunctions).then((finalResult) => {
    console.log("Кінцевий результат:", finalResult);
});
