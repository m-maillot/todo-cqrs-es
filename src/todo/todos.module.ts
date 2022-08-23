import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TodosGameController } from './todos.controller';
import { QueryHandlers } from './queries/handlers';
import { TodoRepository } from './repository/todo.repository';

@Module({
  imports: [CqrsModule],
  controllers: [TodosGameController],
  providers: [TodoRepository, ...QueryHandlers],
})
export class TodosGameModule {}
