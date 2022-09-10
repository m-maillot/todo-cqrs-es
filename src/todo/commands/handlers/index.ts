import { AddTodoHandler } from './add-todo.handler';
import { EditTodoHandler } from './edit-todo.handler';
import { ApproveTodoHandler } from './approve-todo.handler';
import { AcceptTodoHandler } from './accept-todo.handler';

export const CommandHandlers = [
  AddTodoHandler,
  EditTodoHandler,
  ApproveTodoHandler,
  AcceptTodoHandler,
];
