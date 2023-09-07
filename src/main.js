// 1 програма
// Оголошуєм функцію з ім'ям reverseString, яка одразу повертає результат
function reverseString() {
  return prompt("Введіть рядок:").split("").reverse().join("");
  //split("") розбиває рядок на масив окремих символів
  //reverse() змінює порядок елементів на протилежний
  //join("") об'єднує елементи масиву в рядок без роздільника
}
console.log(reverseString());

// //2 програма
//Функція isPalindrome перевіряє, чи є рядок паліндромом
function isPalindrome(str) {
  //Очищуєм рядок від всіх символів, крім літер,
  //і перетворюємо його на нижній регістр для незалежності від регістру
  const cleanedString = str.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "").toLowerCase();
  ///[^a-zA-Zа-яА-ЯёЁ]/g будь-яким символам, що не є літерами (як латинськими, так і кириличними)
  //g позначає пошук у всьому рядку
  //"" замінюємо символи, які не є літерами, замінюємо їх на порожній рядок, тобто видаляємо їх
  //Обертаєм очищений рядок у зворотному порядку
  const reversedString = cleanedString.split("").reverse().join("");
  //Порівнюєм очищений рядок з обернутим рядком і повертаємо результат
  return cleanedString === reversedString;
}

const inputString = prompt("Введіть рядок для перевірки на паліндром:");
// Викликаємо функцію isPalindrome з введеним рядком і зберігаємо результат
const result = isPalindrome(inputString);
console.log(result ? "Це паліндром" : "Це не паліндром");

//3 програма
// Функція findGCD(a, b) приймає два числа (a і b) і знаходить їхній НСД (найменший спільний дільник)
function findGCD(a, b) {
  while (b !== 0) {
    // Знаходимо залишок від ділення a на b
    const remainder = a % b;
    // Замінюємо a на b
    a = b;
    // Замінюємо b на залишок (нове a % b)
    b = remainder;
  }
  return Math.abs(a);
}
//Перше число
const inputNum1 = parseInt(prompt("Введіть перше число:"));
//Друге число
const inputNum2 = parseInt(prompt("Введіть друге число:"));

// Перевіряєм, ввели дійсні числа (числа, а не текст чи символи)
if (!isNaN(inputNum1) && !isNaN(inputNum2)) {
  // Викликаємо функцію
  const gcd = findGCD(inputNum1, inputNum2);
  // Виводимо результат
  console.log(`НСД чисел ${inputNum1} і ${inputNum2} дорівнює ${gcd}`);
} else {
  //Ввели щось інше, виводимо повідомлення про помилку
  console.log("Ви ввели неправильні числа.");
}
