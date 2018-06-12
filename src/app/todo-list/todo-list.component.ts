import { Component, OnInit } from '@angular/core';
import Todo from "../model/Todo";
import TodoServices from '../services/TodoServices';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [
    ApiServiceService
  ]
})
export class TodoListComponent implements OnInit {

  private _todos: Observable<Array<Todo>>;

  constructor(private ApiService: ApiServiceService) { }

  ngOnInit() {
    this._todos = this.ApiService.getTodos();
  }

}
