//1 програма
// Конструктор об'єкта Student
function Student(firstName, lastName, birthYear, initialCourse) {
    this.firstName = firstName; // Ім'я студента
    this.lastName = lastName; // Прізвище студента
    this.birthYear = birthYear; // Рік народження студента
    this.courses = [initialCourse]; // Масив, що містить курси, на яких навчається студент
    this.grades = []; // Масив для збереження оцінок студента
    this.attendance = []; // Масив для збереження дат відвідування студента
    // Метод для додавання оцінки студенту
    this.addGrade = function (grade) {
        this.grades.push(grade);
    };
    // Метод для додавання дати відвідування студента
    this.addAttendance = function (date) {
        this.attendance.push(date);
    };
    // Метод для обчислення середньої оцінки студента
    this.getAverageGrade = function () {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade);
        return sum / this.grades.length;
    };
    // Метод для обчислення середньої відвідуваності студента
    this.getAverageAttendance = function () {
        if (this.attendance.length === 0) {
            return 0;
        }
        const totalDays = this.attendance.length;
        const presentDays = this.attendance.filter(
            (date) => date.trim() !== ""
        ).length;
        return (presentDays / totalDays) * 100;
    };
    //2 пргограма
    // Метод для зміни курсу студента
    this.changeCourse = function () {
        const newCourse = parseInt(prompt("Введіть новий курс:"));
        if (!isNaN(newCourse) && newCourse >= 1 && newCourse <= 6) {
            this.courses = [newCourse]; // При зміні курсу, стираємо попередні курси і додаємо новий
            console.log(`Курс змінено на ${newCourse}`);
        } else {
            console.log("Помилка: Курс повинен бути від 1 до 6");
        }
    };
    // Метод для додавання нового курсу студентові
    this.addCourse = function () {
        const newCourse = parseInt(prompt("Введіть новий курс для додавання:"));
        if (!isNaN(newCourse) && newCourse >= 1 && newCourse <= 6) {
            if (!this.courses.includes(newCourse)) {
                this.courses.push(newCourse);
                console.log(`Студент навчається на курсі ${newCourse}`);
            } else {
                console.log("Студент вже навчається на цьому курсі");
            }
        } else {
            console.log("Помилка: Курс повинен бути від 1 до 6");
        }
    };
    // Метод для видалення курсу у студента
    this.removeCourse = function () {
        const courseToRemove = parseInt(prompt("Введіть курс для видалення:"));
        if (
            !isNaN(courseToRemove) &&
            courseToRemove >= 1 &&
            courseToRemove <= 6
        ) {
            const index = this.courses.indexOf(courseToRemove);
            if (index !== -1) {
                this.courses.splice(index, 1);
                console.log(
                    `Студент більше не навчається на курсі ${courseToRemove}`
                );
            } else {
                console.log("Студент не навчається на цьому курсі");
            }
        } else {
            console.log("Помилка: Курс повинен бути від 1 до 6");
        }
    };
    // Метод для отримання інформації про студента
    this.getInfo = function () {
        return `Ім'я: ${this.firstName}, Прізвище: ${
            this.lastName
        }, Рік народження: ${this.birthYear}, Курси: ${this.courses.join(
            ", "
        )}, Оцінки: ${this.grades.join(
            ", "
        )}, Відвідуваність: ${this.attendance.join(", ")}`;
    };
    // Метод для отримання кількості занять, на які студент відвідав
    this.getNumberOfClassesAttended = function () {
        return this.attendance.length;
    };
}
const firstName = prompt("Введіть ім'я студента:");
const lastName = prompt("Введіть прізвище студента:");
const birthYear = parseInt(prompt("Введіть рік народження студента:"));

let initialCourse;
while (true) {
    initialCourse = parseInt(prompt("Введіть початковий курс студента:"));
    if (!isNaN(initialCourse) && initialCourse >= 1 && initialCourse <= 6) {
        break;
    } else {
        alert("Початковий курс повинен бути числом від 1 до 6.");
    }
}
const student = new Student(firstName, lastName, birthYear, initialCourse);
while (true) {
    const gradeInput = prompt(
        "Введіть оцінку студента (або натисніть 'Скасувати'):"
    );
    if (gradeInput === null || gradeInput.trim() === "") {
        break;
    }
    const grade = parseFloat(gradeInput);
    if (!isNaN(grade)) {
        student.addGrade(grade);
    }
}
while (true) {
    const attendanceDate = prompt(
        "Введіть дату відвідування студента (або натисніть 'Скасувати'):"
    );
    if (attendanceDate === null || attendanceDate.trim() === "") {
        break;
    }
    student.addAttendance(attendanceDate);
}
// Виводимо інформацію про студента
console.log(student.getInfo());
// Розраховуємо середню успішність та відвідуваність
console.log(
    "Кількість пройдених занять:",
    student.getNumberOfClassesAttended()
);
console.log("Середня успішність:", student.getAverageGrade());
console.log("Середнє відвідування:", student.getAverageAttendance() + "%");
student.changeCourse();

while (true) {
    const action = prompt(
        "Ви хочете додати (напишіть 'додати') чи видалити (напишіть 'видалити') курс? (або натисніть 'Скасувати' для завершення):"
    );
    if (action === null || action.trim() === "") {
        break;
    }
    if (action === "додати") {
        student.addCourse();
    } else if (action === "видалити") {
        student.removeCourse();
    } else {
        console.log("Невірна команда. Введіть 'додати' або 'видалити'.");
    }
}
console.log("Оновлена інформація про студента:");
console.log(student.getInfo());

// //3 програма
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
    this.attendance = [];

    this.addGrade = function (grade) {
        this.grades.push(grade);
    };
    this.addAttendance = function (status) {
        this.attendance.push(status);
    };
    this.getAverageGrade = function () {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade);
        return sum / this.grades.length;
    };
    this.getAverageAttendance = function () {
        if (this.attendance.length === 0) {
            return 0;
        }
        const totalDays = this.attendance.length;
        const presentDays = this.attendance.filter(
            (status) => status === "Присутній"
        ).length;
        return (presentDays / totalDays) * 100;
    };
    this.getRating = function () {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this.getAverageAttendance();
        return (averageGrade + averageAttendance) / 2;
    };
    this.getInfo = function () {
        return `Ім'я: ${this.firstName}, Прізвище: ${
            this.lastName
        }, Середній бал: ${this.getAverageGrade().toFixed(
            2
        )}, Відвідуваність: ${this.getAverageAttendance().toFixed(
            2
        )}%, Рейтинг: ${this.getRating().toFixed(2)}`;
    };
}

function Group() {
    this.students = [];
    this.addStudent = function (student) {
        this.students.push(student);
        console.log(
            `Додано студента: ${student.firstName} ${student.lastName}`
        );
    };
    this.removeStudent = function (student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
            console.log(
                `Видалено студента: ${student.firstName} ${student.lastName}`
            );
        }
    };
    this.getStudentsRating = function () {
        const ratings = [];
        this.students.forEach((student, index) => {
            const rating = student.getRating();
            ratings.push({
                studentNumber: index + 1,
                firstName: student.firstName,
                lastName: student.lastName,
                rating: rating.toFixed(2),
                attendance: student.getAverageAttendance().toFixed(2),
            });
        });
        return ratings;
    };
    this.printStudents = function () {
        console.log("Список студентів:");
        this.students.forEach((student, index) => {
            console.log(
                `${index + 1}. ${student.firstName} ${student.lastName}`
            );
        });
    };
}

// Функція для введення інформації про студента
function enterStudentInfo() {
    const firstName = prompt("Введіть ім'я студента:");
    const lastName = prompt("Введіть прізвище студента:");
    const student = new Student(firstName, lastName);

    return student;
}

// Функція для введення інформації про оцінки та відвідуваність
function enterStudentData(student) {
    while (true) {
        const gradeInput = prompt(
            "Введіть оцінку студента (або натисніть 'Скасувати'):"
        );
        if (gradeInput === null || gradeInput.trim() === "") {
            break;
        }
        const grade = parseFloat(gradeInput);
        if (!isNaN(grade)) {
            student.addGrade(grade);
        }
    }

    while (true) {
        const attendanceStatus = prompt(
            "Введіть статус відвідуваності студента (Присутній/Відсутній) " +
                "(або натисніть 'Скасувати'):"
        );
        if (attendanceStatus === null || attendanceStatus.trim() === "") {
            break;
        }
        student.addAttendance(attendanceStatus);
    }
}

const group = new Group();

while (true) {
    const action = prompt(
        "Ви хочете додати нового студента (напишіть 'додати') чи завершити (напишіть 'завершити')? " +
            "(або натисніть 'Скасувати':"
    );
    if (
        action === null ||
        action.trim() === "" ||
        action.toLowerCase() === "завершити"
    ) {
        break;
    } else if (action.toLowerCase() === "додати") {
        const student = enterStudentInfo();
        enterStudentData(student);
        group.addStudent(student);
        group.printStudents();
    }
}
const ratings = group.getStudentsRating();
console.log("Рейтинг студентів:");
ratings.forEach((student) => {
    console.log(
        `${student.studentNumber}. ${student.firstName} ${student.lastName} - Рейтинг: ${student.rating}, Відвідуваність: ${student.attendance}%`
    );
});
