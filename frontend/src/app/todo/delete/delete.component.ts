import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import {NgIf} from '@angular/common';
import {Todo} from '../todo.types';

@Component({
    selector: 'app-delete-todo',
    templateUrl: './delete.component.html',
    standalone: true,
    imports: [
        NgIf
    ],
    styleUrls: ['./delete.component.css']
})
export class DeleteTodoComponent implements OnInit {
    todoId: string | null = null;
    isDeleting: boolean = false;
    todo: Todo | null = null
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private todoService: TodoService
    ) {}

    ngOnInit(): void {
        this.todoId = this.route.snapshot.paramMap.get('id');

        if (this.todoId) {
            this.todoService.getTodoById(this.todoId).subscribe({
                next: (todo) => {
                    this.todo = todo;
                },
                error: (err) => {
                    console.error('Error fetching todo:', err);
                    this.router.navigate(['/']);
                }
            });
        } else {
            console.error('Todo ID is missing');
            this.router.navigate(['/']);
        }
    }

    confirmDelete(): void {
        if (this.todoId) {
            this.isDeleting = true;
            this.todoService.deleteTodo(this.todoId).subscribe({
                next: () => {
                    console.log('Todo deleted successfully');
                    this.router.navigate(['/']);
                },
                error: (err) => {
                    console.error('Error deleting todo:', err);
                    this.isDeleting = false;
                }
            });
        } else {
            console.error('Todo ID is missing');
        }
    }

    cancel(): void {
        this.router.navigate(['/']);
    }
}
