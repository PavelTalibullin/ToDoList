import { tasks } from "../scripts.js";
import { displayTask } from "./displayTask.js";

export function editTask (index) {
	const newTaskName = prompt("Редактировать задачу", tasks[index].name);
	if(newTaskName !== null && newTaskName.trim() !== "") {
		tasks[index].name = newTaskName.trim();
		displayTask()
	};
}