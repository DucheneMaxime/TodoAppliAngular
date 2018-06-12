import  Todo  from "../model/Todo";
import TodoApi from "./TodoApi";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiServiceService } from "./api-service.service";

@Injectable()
export default class TodoServices {

    constructor(private api: ApiServiceService) { }
    getTodos(): Observable<Array<Todo>> {
        return this.api.getTodos();
    }

    addTodo(todo: Todo){
        this.api.addTodo(todo).subscribe();
    }

    deleteTodo(todo: Todo) {
        this.api.deleteTodo(todo).subscribe();
    }
}