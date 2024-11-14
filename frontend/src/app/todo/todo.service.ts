import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo.types';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:8000/todo';

  constructor(private http: HttpClient) {
  }

  createTodo(todo: Todo): Observable<any> {
    return this.http.post(this.apiUrl, todo, {withCredentials: true});
  }
}
