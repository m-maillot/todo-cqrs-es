import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { TodoRepository } from '../../repository/todo.repository';
import { AddTodoCommand } from '../impl/add-todo.command';

@CommandHandler(AddTodoCommand)
export class AddTodoHandler implements ICommandHandler<AddTodoCommand> {
  constructor(
    private readonly repository: TodoRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: AddTodoCommand) {
    console.log(clc.greenBright('AddTodoCommand...'));

    const { comment } = command;
    const todo = this.publisher.mergeObjectContext(
      await this.repository.create(comment),
    );
    todo.commit();
    return todo;
  }
}
