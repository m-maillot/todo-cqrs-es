import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { TodoRepository } from '../../repository/todo.repository';
import { GetTodoQuery } from '../impl';

@QueryHandler(GetTodoQuery)
export class GetTodoHandler implements IQueryHandler<GetTodoQuery> {
  constructor(private readonly repository: TodoRepository) {}

  async execute(query: GetTodoQuery) {
    console.log(clc.yellowBright(`Async GetTodoQuery (${query.id})...`));
    return this.repository.findById(query.id);
  }
}
