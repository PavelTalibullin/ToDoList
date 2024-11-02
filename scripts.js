import { addTask } from "./modules/addTask.js";
import { displayTask } from "./modules/displayTask.js";


export const tasks = [];

document.querySelector("#addTask").onclick = addTask;

document.querySelector("#showAll").onclick = () => displayTask('all');
document.querySelector("#showCompleted").onclick = () => displayTask('completed');
document.querySelector("#showPending").onclick = () => displayTask('pending');

