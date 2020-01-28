export interface taskInterface{
    addTask(task:string):number;
    printTask():void;
    deleteTasks(task:string):number;
    tasks:Array<string>;
}