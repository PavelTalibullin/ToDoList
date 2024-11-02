import { tasks } from "../scripts.js";
import { displayTask } from "./displayTask.js";

// Добавление задачи
export function addTask() {
	const taskInput = document.querySelector("#taskInput"); //Обратился к инпуту для работы с ним
	const taskName = taskInput.value.trim(); // Достал от туда значение и удалил пробелы до и после текста

	if(taskName === "") { // Проверил на пустую строку
		alert("название задачи не может быть пустым.");
		return; // Если пустая строка, функция закончит выполнение
	}

	tasks.push({name: taskName, completed: false}); // Добавил задачу в массив
	taskInput.value = ""; // Очистил инпут

	displayTask(); // функция отображения задачи на экране
}