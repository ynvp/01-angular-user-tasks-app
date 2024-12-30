import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [CardComponent, CommonModule],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {
    @Input({ required: true }) task!: Task;

    private tasksService = inject(TasksService);

    onCompleteTask() {
        this.tasksService.removeTask(this.task.id);
    }
}
