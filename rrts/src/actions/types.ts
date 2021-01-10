import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos, // typescript assig ns a 0 to this.
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
