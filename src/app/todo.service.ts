import { Injectable } from '@angular/core';
import Todo from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import consts from '../consts';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todosUrl =  `${consts.API}/todos`;  // URL to web api
    constructor(private http: HttpClient) {
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.todosUrl}`);
    }

    add(name: string): void {
        // let id = Math.max(...this.todos.map(todo => todo.id));
        // this.todos.push(new Todo(id, name));
    }

    flipState(todo: Todo): void {
        // todo.done = !todo.done;
    }

    delete(todo: Todo): void {
        // this.todos.splice(this.todos.indexOf(todo), 1);
    }
}
