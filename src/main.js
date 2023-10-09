// Клас TodoList для керування списком нотаток
class TodoList {
    constructor() {
        this.notes = [];
    }
    // Додавання нової нотатки
    addNote(noteText) {
        if (noteText.trim() !== "") {
            const currentDate = new Date();
            this.notes.push({
                text: noteText,
                completed: false,
                createdDate: currentDate,
                editedDate: null,
            });
        }
    }
    // Редагування існуючої нотатки за індексом
    editNote(index, newText) {
        if (index >= 0 && index < this.notes.length) {
            const currentDate = new Date();
            this.notes[index].text = newText;
            this.notes[index].editedDate = currentDate;
        }
    }
    // Видалення нотатки за індексом
    deleteNote(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes.splice(index, 1);
        }
    }
    // Зміна статусу виконання нотатки за індексом
    toggleNoteStatus(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes[index].completed = !this.notes[index].completed;
        }
    }
    // Отримання списку нотаток
    getNoteList() {
        return this.notes;
    }
    // Отримання загальної кількості нотаток
    getNoteCount() {
        return this.notes.length;
    }
    // Отримання кількості невиконаних нотаток
    getRemainingNoteCount() {
        return this.notes.filter((note) => !note.completed).length;
    }
    // Позначення нотатки як виконаної за індексом
    markNoteAsCompleted(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes[index].completed = true;
        }
    }
    // Отримання кількості виконаних нотаток
    getCompletedNoteCount() {
        return this.notes.filter((note) => note.completed).length;
    }
    // Пошук нотаток за іменем
    searchNotesByName(name) {
        return this.notes.filter((note) =>
            note.text.toLowerCase().includes(name.toLowerCase())
        );
    }
    // Сортування нотаток за статусом
    sortNotesByStatus(completedFirst = true) {
        if (completedFirst) {
            return this.notes
                .slice()
                .sort((a, b) =>
                    a.completed === b.completed ? 0 : a.completed ? -1 : 1
                );
        } else {
            return this.notes
                .slice()
                .sort((a, b) =>
                    a.completed === b.completed ? 0 : a.completed ? 1 : -1
                );
        }
    }
}

// Створення екземпляра TodoList
const todoList = new TodoList();

// Отримання DOM-елементів
const noteInput = document.getElementById("noteInput");
const addButton = document.getElementById("addButton");
const noteList = document.getElementById("noteList");
const totalNotes = document.getElementById("totalNotes");
const remainingNotes = document.getElementById("remainingNotes");
const completedNotesCount = document.getElementById("completedNotesCount");

// Функція для оновлення відображення нотаток
function updateNoteDisplay() {
    noteList.innerHTML = "";
    const notes = todoList.getNoteList();
    totalNotes.textContent = todoList.getNoteCount();
    remainingNotes.textContent = todoList.getRemainingNoteCount();
    completedNotesCount.textContent = todoList.getCompletedNoteCount();

    // Створення HTML-елементів для кожної нотатки
    notes.forEach((note, index) => {
        const noteItem = document.createElement("div");
        noteItem.className = `note ${note.completed ? "completed" : ""}`;
        noteItem.innerHTML = `
            <span class="note-text">${note.text}</span>
            <button class="edit-button" data-index="${index}">${
            note.completed ? "Переглянути" : "Редагувати"
        }</button>
            <button class="delete-button" data-index="${index}">Видалити</button>
            <button class="complete-button" data-index="${index}">${
            note.completed ? "Скасувати виконання" : "Позначити як виконану"
        }</button>
        `;

        // Додавання обробника подій на кнопку "complete-button"
        const completeButton = noteItem.querySelector(".complete-button");
        completeButton.addEventListener("click", () => {
            if (note.completed) {
                todoList.toggleNoteStatus(index);
                updateNoteDisplay();
            } else {
                todoList.markNoteAsCompleted(index);
                updateNoteDisplay();
            }
        });

        // Додавання нотатки до списку
        noteList.appendChild(noteItem);
    });
}

// Оновлення відображення при завантаженні сторінки
updateNoteDisplay();

// Додавання нотатки при кліку на кнопку "Добавити"
addButton.addEventListener("click", () => {
    const noteText = noteInput.value;
    todoList.addNote(noteText);
    noteInput.value = "";
    updateNoteDisplay();
});

// Обробка подій кліку на кнопки "Редагувати" та "Видалити"
noteList.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
        const index = event.target.getAttribute("data-index");
        const newText = prompt(
            "Редагувати:",
            todoList.getNoteList()[index].text
        );
        if (newText !== null) {
            todoList.editNote(index, newText);
            updateNoteDisplay();
        }
    }

    if (event.target.classList.contains("delete-button")) {
        const index = event.target.getAttribute("data-index");
        if (confirm("Видалити?")) {
            todoList.deleteNote(index);
            updateNoteDisplay();
        }
    }
});

//2 Додавання обробника події для кнопки "Пошук"
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {
    const searchText = searchInput.value.trim();
    const searchResults = todoList.searchNotesByName(searchText);
    displayNotes(searchResults);
});
// Додавання обробника події для кнопки "Сортувати"
const sortButton = document.getElementById("sortButton");
const sortSelect = document.getElementById("sortSelect");

sortButton.addEventListener("click", () => {
    const sortByCompletedFirst = sortSelect.value === "completedFirst";
    const sortedNotes = todoList.sortNotesByStatus(sortByCompletedFirst);
    displayNotes(sortedNotes);
});

function displayNotes(notes) {
    noteList.innerHTML = "";
    totalNotes.textContent = notes.length;

    notes.forEach((note, index) => {
        const noteItem = document.createElement("div");
        noteItem.className = `note ${note.completed ? "completed" : ""}`;
        noteItem.innerHTML = `
            <span class="note-text">${note.text}</span>
            <p class="created-date">Створений: ${note.createdDate.toLocaleString()}</p>
            <p class="edited-date">Відредаговано: ${
                note.editedDate
                    ? note.editedDate.toLocaleString()
                    : "Не відредаговано"
            }</p>
            <button class="edit-button" data-index="${index}">${
            note.completed ? "Переглянути" : "Редагувати"
        }</button>
            <button class="delete-button" data-index="${index}">Видалити</button>
            <button class="complete-button" data-index="${index}">${
            note.completed ? "Скасувати виконання" : "Позначити як виконану"
        }</button>
        `;

        // Додавання обробників подій на кнопки
        const completeButton = noteItem.querySelector(".complete-button");
        completeButton.addEventListener("click", () => {
            if (note.completed) {
                todoList.toggleNoteStatus(index);
                displayNotes(notes);
            } else {
                todoList.markNoteAsCompleted(index);
                displayNotes(notes);
            }

            // Оновити список нотаток із відповідними індексами
            displayNotes(
                todoList.sortNotesByStatus(
                    sortSelect.value === "completedFirst"
                )
            );
        });

        noteList.appendChild(noteItem);
    });
}
// Оновлення відображення при завантаженні сторінки
todoList.updateNoteDisplay();
