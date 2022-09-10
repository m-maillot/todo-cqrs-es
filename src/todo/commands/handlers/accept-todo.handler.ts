import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { TodoRepository } from '../../repository/todo.repository';
import { AcceptTodoCommand } from '../impl/accept-todo.command';
import { State } from '../../models/todo.model';

@CommandHandler(AcceptTodoCommand)
export class AcceptTodoHandler implements ICommandHandler<AcceptTodoCommand> {
  constructor(
    private readonly repository: TodoRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: AcceptTodoCommand) {
    console.log(clc.greenBright('AcceptTodoCommand...'));

    const { id } = command;
    const todo = this.publisher.mergeObjectContext(
      await this.repository.updateState(id, State.Accepted),
    );
    todo.accepted();
    todo.commit();
    return todo;
  }
}
