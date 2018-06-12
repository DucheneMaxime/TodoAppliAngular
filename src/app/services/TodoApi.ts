import Todo  from "../model/Todo";
import { ApiServiceService } from './api-service.service'

export default class TodoApi {

    //private _todos: Array<Todo> = ApiServiceService.getTodos();

    private _todos: Array<Todo> = [new Todo('Faire la vaisselle', true),
    new Todo('Envoyer un mail à Olivier', false),
    new Todo('Manger une bonne raclette', true),
    new Todo('Siffler sur la colline', false)];

    fetchTodos(): Promise<Array<Todo>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._todos)
            }, 1);
        });
    }

    addTodo(todo: Todo) {
        this._todos = [...this._todos,todo];
    }

    deleteTodo(todoDel: Todo) {
        this._todos.splice(this._todos.indexOf(todoDel), 1);
    }
}