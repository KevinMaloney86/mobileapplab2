import { taskInterface } from './interface';

class tasks implements taskInterface {
    tasks: Array<string> = [];

    addTask(task: string): number {
        this.tasks.push(task);
        console.log("Item " + task + " has been added to the array");
        return this.tasks.length;
    }

    printTask():void {
        console.log("The array contains the following items: ");
        this.tasks.forEach(function (task) {
            console.log(task);
        })

    }

    deleteTasks(task: string): number {
        let index: number = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Item " + task + " deleted from the array");
        }
        else {
            console.log("Item " + task + " not in the array");
        }
        return this.tasks.length;

    }


}

let task = new tasks();
task.addTask("Finish Lab");

