import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Todo from '../model/Todo';

const API_BASE_URL: string = 'http://localhost:3000/';
const API_TODOS: string = 'todos';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getTodos():Observable<Array<Todo>> {
    return <Observable<Array<Todo>>> this.http.get(`${API_BASE_URL}${API_TODOS}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${API_BASE_URL}${API_TODOS}`, todo);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${API_BASE_URL}${API_TODOS}/${todo.id}`);
  }
}
