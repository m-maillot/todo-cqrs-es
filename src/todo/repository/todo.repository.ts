import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { TodoEntity } from './entities/todo.entity';
import { State, Todo } from '../models/todo.model';

@Injectable()
export class TodoRepository {
  todoDb: TodoEntity[] = [];

  async findById(id: string): Promise<Todo | undefined> {
    const todoEntity = this.todoDb.find((todo) => todo.id === id);
    if (todoEntity) {
      return this.toAggregate(todoEntity);
    }
    return undefined;
  }

  async findAll(): Promise<Todo[]> {
    return this.todoDb.map((item) => this.toAggregate(item));
  }

  async create(comment: string): Promise<Todo> {
    const todo = new TodoEntity(uuidv4(), comment);
    this.todoDb = this.todoDb.concat(todo);
    return this.toAggregate(todo);
  }

  async update(id: string, comment: string): Promise<Todo | undefined> {
    const todo = this.todoDb.find((todo) => todo.id === id);
    if (todo) {
      const todos = this.todoDb.filter((todo) => todo.id !== id);
      const newTodo = new TodoEntity(id, comment, todo.state, todo.approvedBy);
      this.todoDb = todos.concat(newTodo);
      return this.toAggregate(newTodo);
    }
    return undefined;
  }

  async approvedBy(id: string, user: string): Promise<Todo | undefined> {
    const todo = this.todoDb.find((todo) => todo.id === id);
    if (todo) {
      const todos = this.todoDb.filter((todo) => todo.id !== id);
      const newTodo = new TodoEntity(
        id,
        todo.comment,
        todo.state,
        todo.approvedBy.concat(user),
      );
      this.todoDb = todos.concat(newTodo);
      return this.toAggregate(newTodo);
    }
    return undefined;
  }

  async updateState(id: string, state: State): Promise<Todo | undefined> {
    const todo = this.todoDb.find((todo) => todo.id === id);
    if (todo) {
      const todos = this.todoDb.filter((todo) => todo.id !== id);
      const newTodo = new TodoEntity(id, todo.comment, state, todo.approvedBy);
      this.todoDb = todos.concat(newTodo);
      return this.toAggregate(newTodo);
    }
    return undefined;
  }

  toAggregate(entity: TodoEntity): Todo {
    return new Todo(entity.id, entity.comment, entity.state, entity.approvedBy);
  }
}
