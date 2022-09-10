import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Todo } from './models/todo.model';
import { GetTodoQuery, GetTodosQuery } from './queries/impl';
import { AddTodoDto } from './interfaces/add-todo-dta.interface';
import { AddTodoCommand } from './commands/impl/add-todo.command';
import { EditTodoDto } from './interfaces/edit-todo-dta.interface';
import { EditTodoCommand } from './commands/impl/edit-todo.command';
import { ApproveTodoDto } from './interfaces/approve-todo-dto.interface';
import { ApproveTodoCommand } from './commands/impl/approve-todo.command';

@Controller('todos')
export class TodosController {
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

  @Post()
  async addTodo(@Body() dto: AddTodoDto) {
    return this.commandBus.execute(new AddTodoCommand(dto.comment));
  }

  @Post(':id/approve')
  async approveTodo(@Param('id') id: string, @Body() dto: ApproveTodoDto) {
    return this.commandBus.execute(new ApproveTodoCommand(id, dto.username));
  }

  @Put(':id')
  async editTodo(@Param('id') id: string, @Body() dto: EditTodoDto) {
    return this.commandBus.execute(new EditTodoCommand(id, dto.comment));
  }
}
