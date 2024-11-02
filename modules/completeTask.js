import { tasks } from "../scripts.js";
import { displayTask } from "./displayTask.js";

export function completeTask(index) {
	tasks[index].completed = !tasks[index].completed;
	displayTask();
}