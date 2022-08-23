import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { TodoRepository } from '../../repository/todo.repository';
import { GetTodosQuery } from '../impl';

@QueryHandler(GetTodosQuery)
export class GetTodosHandler implements IQueryHandler<GetTodosQuery> {
  constructor(private readonly repository: TodoRepository) {}

  async execute(query: GetTodosQuery) {
    console.log(clc.yellowBright('Async GetTodosQuery...'));
    return this.repository.findAll();
  }
}
