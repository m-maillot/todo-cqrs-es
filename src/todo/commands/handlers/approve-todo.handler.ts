import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { TodoRepository } from '../../repository/todo.repository';
import { ApproveTodoCommand } from '../impl/approve-todo.command';

@CommandHandler(ApproveTodoCommand)
export class ApproveTodoHandler implements ICommandHandler<ApproveTodoCommand> {
  constructor(
    private readonly repository: TodoRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: ApproveTodoCommand) {
    console.log(clc.greenBright('ApproveTodoCommand...'));

    const { id, username } = command;
    const todo = this.publisher.mergeObjectContext(
      await this.repository.approvedBy(id, username),
    );
    todo.approved(username);
    todo.commit();
    return todo;
  }
}
