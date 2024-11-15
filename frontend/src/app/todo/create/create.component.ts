import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TodoService} from '../todo.service';
import {Todo} from '../todo.types';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: 'create.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./create.component.css']
})
export class CreateTodoComponent {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService,private router:Router) {
    this.todoForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      done: [false]
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      const newTodo: Todo = this.todoForm.value;
      this.todoService.createTodo(newTodo).subscribe({
        next: () => {
          console.log('Todo created successfully');
          this.todoForm.reset({done: false});
          this.router.navigate(['/']);
        },
        error: (error) => console.error('Error creating todo:', error)
      });
    }
  }
}
