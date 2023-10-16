function findPalindrome(num) {
    let steps = 0;
    while (true) {
        const numStr = String(num);
        const reverseNumStr = numStr.split("").reverse().join("");
        if (numStr === reverseNumStr) {
            return { result: num, steps };
        }
        num += parseInt(reverseNumStr, 10);
        steps++;
        if (steps >= 1000) {
            // Перевірка на Lychrel number
            return { result: null, steps: -1 };
        }
    }
}

// Використання функції
const numberToCheck = 196;
const result = findPalindrome(numberToCheck);

if (result.steps === -1) {
    console.log(
        `Число ${numberToCheck} є Lychrel number - число яке немає поліндрому.`
    );
} else {
    console.log(`Знайдено паліндром: ${result.result}`);
    console.log(`Кількість кроків: ${result.steps}`);
}
