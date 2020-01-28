let tasks: Array<string> = [];

function addTask(task: string): number {
    tasks.push(task);
    console.log("Item " + task + " has been added to the array");
    return tasks.length;
}

function printTask() {
    console.log("The array contains the following items: ");
    tasks.forEach(function (task) {
        console.log(task);
    })

}

function deleteTasks(task: string): number {
    let index: number = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Item " + task + " deleted from the array");
    }
    else {
        console.log("Item " + task + " not in the array");
    }
    return tasks.length;

}



addTask("Finish Lab");
let tasksNo: number = addTask("Eat breakfast");
console.log("The number of tasks to do today is " + tasksNo);


printTask();
deleteTasks("Finish Lab");


