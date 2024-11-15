import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {Todo} from '../todo/todo.types';
import {TodoService} from '../todo/todo.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        RouterOutlet
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    todos: Todo[] = []

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
        this.fetchTodos()
    }

    fetchTodos(): void {
        this.todoService.getTodo().subscribe({
            next: (response) => {
                this.todos = response
                console.log(this.todos)
            },
            error: (error) => {
                if (error.status === 401) {
                    console.error('Unauthorized: No session cookie.');
                } else {
                    console.error('Error occurred:', error);
                }
            }
        })
    }

}
