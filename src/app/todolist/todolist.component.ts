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
    loaded: boolean = false;
    showOnlyNotDone: boolean = false;
    
    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.todoService.getTodos()
        .subscribe(todos => {
            this.todos = todos;
            this.loaded = true;
        });
    }

    filteredTodos(): Todo[] {
        return this.showOnlyNotDone ? this.todos.filter(t => !t.done) : this.todos;
    }

    onDelete(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    add(name: string): void {
        if (name.trim().length) {
            const newTodo = {
                id: 0,
                name,
                done: false
            };
            this.todos.push(newTodo);
            this.todoService.add(name).subscribe(t => newTodo.id = t.id);
        }
    }
}