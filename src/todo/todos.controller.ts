import { Controller, Get, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Todo } from './models/todo.model';
import { GetTodoQuery, GetTodosQuery } from './queries/impl';

@Controller('todos')
export class TodosGameController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.queryBus.execute(new GetTodosQuery());
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<Todo> {
    return this.queryBus.execute(new GetTodoQuery(id));
  }
}
