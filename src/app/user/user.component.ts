import {
    Component,
    Input,
    Output,
    output,
    input,
    computed,
    EventEmitter,
} from '@angular/core';
import { User } from './user.model';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    @Input({ required: true }) user!: User;
    @Output() select = new EventEmitter<string>();
    // select = output<string>();

    get imagePath() {
        return 'assets/users/' + this.user.avatar;
    }
    onSelectUser() {
        this.select.emit(this.user.id);
    }
}
