import { tasks } from "../scripts.js";
import { deleteTask } from "./deleteTask.js";
import { completeTask } from "./completeTask.js";
import { editTask } from "./editTask.js";

export function displayTask(filter = 'all') {
	const taskList = document.querySelector("#taskList");
	taskList.innerHTML = "";

	const filteredTasks = tasks.filter(task => {
		if(filter === "completed") return task.completed;
		if(filter === "pending") return !task.completed;
		return true;
	});

	//Текст задачи
	filteredTasks.forEach((task, index) => {
		const listItem = document.createElement("li");
		
		const taskText = document.createElement("span");
		taskText.textContent = task.name;
		if(task.completed) {
			taskText.classList.add("completed");
		}
		taskText.onclick = () => completeTask(index);
		taskText.ondblclick = () => editTask(index);

		// Кнопка удаления
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Удалить";
		deleteButton.classList = "btn"
		deleteButton.onclick = (event) => {
			event.stopPropagation();
			deleteTask(index);
		};

		listItem.appendChild(taskText);
		listItem.appendChild(deleteButton);
		taskList.appendChild(listItem);
	});
}