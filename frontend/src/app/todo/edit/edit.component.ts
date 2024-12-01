import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TodoService} from '../todo.service';
import {Todo} from '../todo.types';
import {NgIf} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-edit-todo',
    templateUrl: 'edit.component.html',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgIf
    ],
    styleUrls: ['./edit.component.css']
})
export class EditTodoComponent implements OnInit {
    todoForm: FormGroup;
    todoId: string | null = null;
    isLoading: boolean = true;

    constructor(
        private fb: FormBuilder,
        private todoService: TodoService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.todoForm = this.fb.group({
            name: ['', Validators.required],
            description: [''],
            done: [false]
        });
    }

    ngOnInit(): void {
        this.todoId = this.route.snapshot.paramMap.get('id');
        if (this.todoId) {
            this.todoService.getTodoById(this.todoId).subscribe({
                next: (todo: Todo | null) => {
                    if (todo) {
                        this.todoForm.patchValue(todo);
                    } else {
                        console.warn('Todo not found or unauthorized.');
                        this.router.navigate(['/']);
                    }
                    this.isLoading = false;
                },
                error: (err) => {
                    console.error('Error fetching todo:', err);
                    this.router.navigate(['/']);
                }
            });
        } else {
            console.error('No Todo ID provided.');
            this.router.navigate(['/']);
        }
    }

    onSubmit() {
        if (this.todoForm.valid && this.todoId) {
            const updatedTodo: Todo = this.todoForm.value;
            this.todoService.updateTodo(this.todoId, updatedTodo).subscribe({
                next: () => {
                    console.log('Todo updated successfully');
                    this.router.navigate(['/']);
                },
                error: (error: any) => console.error('Error updating todo:', error)
            });
        }
    }
}
