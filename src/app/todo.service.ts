import { Injectable } from '@angular/core';
import Todo from './todo';
import TODOS from './mock-todos';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todos:Todo[] = TODOS;

    getTodos(): Todo[] {
        return this.todos;
    }

    add(name: string): void {
        let id = Math.max(...this.todos.map(todo => todo.id));
        this.todos.push(new Todo(id, name));
    }

    flipState(todo: Todo): void {
        todo.done = !todo.done;
    }

    delete(todo: Todo): void {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
}
