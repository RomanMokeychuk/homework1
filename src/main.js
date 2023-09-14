// //1 програма
const inputArray = prompt(
  "Введіть масив елементів, розділених комами (наприклад, 1,2,3,4,5):"
);
// Перетворення з введеного масиву в масив чисел
const originalArray = inputArray.split(",").map(Number);
//inputArray  розділяє рядок на підстроки, використовуючи кому (,) як роздільник
//.map(Number) перетворює кожен елемент масиву з рядків у числа
//reverse() розвертае масив
originalArray.reverse();
console.log(originalArray);

//2 програма
function uniqueValues(array1, array2) {
  //Множини Set з вхідних масивів для видалення дублікатів
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  // Об'єднуєм множини та створюємо нову множину, щоб зберегти унікальні значення
  const uniqueSet = new Set([...set1, ...set2]);
  // Перетворюєм множину у масив, щоб повернути результат у вигляді масиву.
  return Array.from(uniqueSet);
}

const inputArray1 = prompt(
  "Введіть перший масив (використовуйте кому для розділення значень):"
);
const inputArray2 = prompt(
  "Введіть другий масив (використовуйте кому для розділення значень):"
);
// Розділяєм введені рядки на масиви та перетворюємо їх елементи на числа.
const array1 = inputArray1.split(",").map(Number);
const array2 = inputArray2.split(",").map(Number);
const uniqueValuesArray = uniqueValues(array1, array2);
// Сортуєм масив з унікальними значеннями за зростанням.
uniqueValuesArray.sort((a, b) => a - b);

console.log(uniqueValuesArray);

//3 програма
function calculateAverageGrade(students) {
  const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
  // Обчислюєм середній бал як відношення суми балів до кількості студентів
  const averageGrade = totalGrade / students.length;
  return averageGrade;
}
// Створюєм порожній масив для зберігання даних про студентів
const students = [];

function getStudentData() {
  const name = prompt("Введіть ім'я студента:");
  if (name === null) return null;
  // Перевіряємо, чи користувач не скасував введення
  const age = parseInt(prompt("Введіть вік студента:"));
  const grade = parseFloat(prompt("Введіть середній бал студента:"));

  return { name, age, grade };
}

function displayStudentList() {
  console.log("Список студентів:");
  students.forEach((student) => {
    console.log(
      `Ім'я: ${student.name}, Вік: ${student.age}, Бал: ${student.grade}`
    );
  });
}

while (true) {
  const studentData = getStudentData();
  if (studentData === null) break;
  // Виходимо з циклу, якщо користувач скасував введення

  if (
    studentData.name &&
    !isNaN(studentData.age) &&
    !isNaN(studentData.grade)
  ) {
    // Додаєм дані студента до масиву students
    students.push(studentData);
  } else {
    alert("Некоректні дані.");
  }
}

displayStudentList();
// Перевіряєм, чи є дані про студентів для обчислення середнього балу
if (students.length > 0) {
  console.log("Середній бал студентів:", calculateAverageGrade(students));
} else {
  console.log("Дані про студентів відсутні.");
}
