//1 програма

function isExemple(number) {
  // Якщо число <= 1, то воно не є простим числом
  if (number <= 1) return false;
  // 2 та 3 - прості числа
  if (number <= 3) return true;
  // якщо число ділиться на 2 або 3, то воно складене
  if (number % 2 === 0 || number % 3 === 0) return false;
  let i = 5;
  while (i * i <= number) {
    // якщо число ділиться на i або (i + 2) то воно складене
    if (number % i === 0 || number % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

const n = parseInt(prompt("Введіть число N:"));

console.log(
  isExemple(n)
    ? `Число ${n} є простим числом.`
    : `Число ${n} не є простим числом.`
);

//2 програма
/*sumOfDivisors - це змінна, яка використовується для обчислення суми всіх дільників числа i в циклі,
який перебирає можливі дільники цього числа.*/
function findPerfectNumbers(N) {
  const perfectNumbers = [];
  // Перебираємо числа від 2 до N
  for (let i = 2; i <= N; i++) {
    // Починаємо з 1, бо кожне число ділиться на 1.
    let sumOfDivisors = 1;

    for (let k = 2; k * k <= i; k++) {
      if (i % k === 0) {
        sumOfDivisors += k;
        // Якщо k не є квадратним коренем числа, то додаємо також його пару
        if (k !== i / k) {
          sumOfDivisors += i / k;
        }
      }
    }
    // Якщо сума дільників дорівнює самому числу, то воно досконале
    if (sumOfDivisors === i) {
      perfectNumbers.push(i);
    }
  }

  return perfectNumbers;
}

const N = parseInt(prompt("Введіть число N:"));
const perfectNumbers = findPerfectNumbers(N);

console.log(
  `Досконалі числа в діапазоні від 1 до ${N}: ${perfectNumbers.join(", ")}`
);

//3 програма

var j = parseInt(prompt("Введіть висоту ялинки:"));
var tree = "";

for (var i = 1; i <= j; i++) {
  // Генеруємо пробіли для вирівнювання
  var spaces = "  ".repeat(j - i);
  // Генеруємо зірочки
  var stars = "* ".repeat(2 * i - 1);
  // Об'єднуємо і додаємо до рядка
  tree += spaces + stars + "\n";
}

alert(tree);
