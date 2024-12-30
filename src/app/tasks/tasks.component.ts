import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, NewTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    @Input({ required: true }) name!: string;
    @Input({ required: true }) userId!: string;
    isAddingTask: boolean = false;

    constructor(private tasksService: TasksService) {} // Dependency Injection

    get selectedUserTasks(): Task[] {
        return this.tasksService.getUserTasks(this.userId);
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCloseAddTask() {
        this.isAddingTask = !this.isAddingTask;
    }

    onAddTask(taskData: NewTaskData) {
        this.isAddingTask = false;
    }
}
