"use strict";
exports.__esModule = true;
var tasks = /** @class */ (function () {
    function tasks() {
        this.tasks = [];
    }
    tasks.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Item " + task + " has been added to the array");
        return this.tasks.length;
    };
    tasks.prototype.printTask = function () {
        console.log("The array contains the following items: ");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    tasks.prototype.deleteTasks = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Item " + task + " deleted from the array");
        }
        else {
            console.log("Item " + task + " not in the array");
        }
        return this.tasks.length;
    };
    return tasks;
}());
var task = new tasks();
task.addTask("Finish Lab");
