import { Injectable } from '@nestjs/common';
import { Todo } from '../models/todo.model';
import { todos } from './fixtures/todo';

@Injectable()
export class TodoRepository {
  async findById(id: string): Promise<Todo | undefined> {
    return todos.find((todo) => todo.id === id);
  }

  async findAll(): Promise<Todo[]> {
    return todos;
  }
}
