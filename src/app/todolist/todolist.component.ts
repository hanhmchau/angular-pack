import { Component, Inject } from '@angular/core';
import { TodoService } from '../todo.service';
import Todo from '../todo';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class TodoListComponent {
    todos: Todo[] = [];
    
    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.todos = this.todoService.getTodos();
    }

    add(newTodo: string): void {
        if (newTodo) {
            this.todoService.add(newTodo);
        }
    }
}