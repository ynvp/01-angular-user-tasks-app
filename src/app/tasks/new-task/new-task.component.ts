import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
    @Output() cancel = new EventEmitter<void>(); // void used for special type that no data is emitted.
    @Output() addNewTask = new EventEmitter<NewTaskData>();

    enteredTitle: string = '';
    enteredSummary: string = '';
    enteredDate: string = '';

    onCancelAddTask() {
        this.cancel.emit();
    }

    onSubmit() {
        this.addNewTask.emit({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDate,
        });
    }
}
