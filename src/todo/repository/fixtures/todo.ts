import { Todo } from '../../models/todo.model';

export const todo1 = new Todo(
  'FCBDE066-22BF-11ED-B410-AE5A90466E5A',
  'Première ToDo',
);
export const todo2 = new Todo(
  'FCBDE340-22BF-11ED-B410-AE5A90466E5A',
  'Deuxième ToDo',
);
export const todo3 = new Todo(
  'FCBDE368-22BF-11ED-B410-AE5A90466E5A',
  'Troisième ToDo',
);

export const todos = [todo1, todo2, todo3];
