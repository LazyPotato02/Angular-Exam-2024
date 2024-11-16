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

    getTodo(): Observable<any> {
        return this.http.get(this.apiUrl, {withCredentials: true});
    }
    getTodoById(id: string): Observable<Todo> {
        return this.http.get<Todo>(`${this.apiUrl}/${id}`, {withCredentials:true});
    }

    createTodo(todo: Todo): Observable<any> {
        return this.http.post(this.apiUrl, todo, {withCredentials: true});
    }

    updateTodo(id: string, todo: Todo): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, todo, {withCredentials:true});
    }

    deleteTodo(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`,{withCredentials:true});
    }
}
