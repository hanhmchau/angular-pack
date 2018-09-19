import { Component, Input, Output, EventEmitter } from '@angular/core';
import Todo from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    @Input() todo: Todo;
    @Output() deleted = new EventEmitter<Todo>();
    
    constructor(private todoService: TodoService) { }

    update() {
        if (this.todo.name.length) {
            this.todoService.update(this.todo)
                .subscribe();
        }
    }

    delete() {
        this.deleted.emit(this.todo);
        this.todoService.delete(this.todo)
        .subscribe();
    }
}