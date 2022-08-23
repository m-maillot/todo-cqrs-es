import { Injectable } from '@nestjs/common';
import { Todo } from '../models/todo.model';
import { todos } from './fixtures/todo';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoRepository {
  todoDb = todos;

  async findById(id: string): Promise<Todo | undefined> {
    return this.todoDb.find((todo) => todo.id === id);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoDb;
  }

  async create(comment: string): Promise<Todo> {
    const todo = new Todo(uuidv4(), comment);
    this.todoDb = this.todoDb.concat(todo);
    return todo;
  }
}
