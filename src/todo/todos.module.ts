import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { TodosController } from './todos.controller';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { TodoRepository } from './repository/todo.repository';
import { SagasHandlers } from './sagas';

@Module({
  imports: [CqrsModule],
  controllers: [TodosController],
  providers: [
    TodoRepository,
    ...QueryHandlers,
    ...CommandHandlers,
    ...EventHandlers,
    ...SagasHandlers,
  ],
})
export class TodosModule {}
