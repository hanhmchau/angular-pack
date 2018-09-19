import { TodoService } from './todo.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        // add components here
        AppComponent,
        TodoListComponent,
        TodoComponent
    ],
    imports: [BrowserModule, FormsModule, HttpClientModule ],
    exports: [],
    providers: [
        // add injectable things here
        TodoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}