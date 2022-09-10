import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { TodoRepository } from '../../repository/todo.repository';
import { EditTodoCommand } from '../impl/edit-todo.command';

@CommandHandler(EditTodoCommand)
export class EditTodoHandler implements ICommandHandler<EditTodoCommand> {
  constructor(
    private readonly repository: TodoRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: EditTodoCommand) {
    console.log(clc.greenBright('EditTodoCommand...'));

    const { id, comment } = command;
    const todo = this.publisher.mergeObjectContext(
      await this.repository.update(id, comment),
    );
    todo.edited(comment);
    todo.commit();
    return todo;
  }
}
