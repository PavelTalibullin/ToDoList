import { tasks } from "../scripts.js";
import { displayTask } from "./displayTask.js";

export function deleteTask(index) {
	tasks.splice(index, 1);
	displayTask();
}